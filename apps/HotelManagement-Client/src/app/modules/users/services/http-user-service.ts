import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, Subject, tap, throwError } from "rxjs";
import { LoggedInDetails, LoginInfo, User } from "../models/user";
import { UserService } from "./user.service";


const baseUrl='https://localhost:7066/api/users';

@Injectable()
export class HttpUserService implements UserService{

    constructor(private http:HttpClient){
        if(!this.loggedInUser)
        {
            var jsonString = localStorage.getItem("user");
            if(jsonString)
            {
                var user = JSON.parse(jsonString);
                this.updateCurrentUser(user);
            }
        }
    }
    getUserByEmail(email: string): Observable<User> {
        return this.http.get<User>(baseUrl+'/'+email);
    }
    
    getLoggedInUser(): LoggedInDetails|undefined {
        return this.loggedInUser;
    }
    getAllUsers(): Observable<User[]> {
        return this
                    .http
                    .get<User[]>(baseUrl);
    }
   
    loggedInUserAnnouncement = new Subject<LoggedInDetails|undefined>();
    loggedInUser?:LoggedInDetails;

    getAuthenticationHeader()
    {
        if(!this.loggedInUser)
            return {};
        else
            return{
                Authorization:`BEARER ${this.loggedInUser.token}`
            }
    }

    updateCurrentUser(user?:LoggedInDetails){
        this.loggedInUser=user;
        this.loggedInUserAnnouncement.next(user);
        if(this.loggedInUser)
            localStorage.setItem("user", JSON.stringify(this.loggedInUser));
        else    
            localStorage.removeItem("user");
    }

    login(loginInfo: LoginInfo): Observable<LoggedInDetails> {
        return this
                    .http
                    .post<LoggedInDetails>(`${baseUrl}/login`,loginInfo)
                    .pipe(
                        tap( (info:LoggedInDetails)=>{
                            console.log('user info received on login:',info);
                            this.updateCurrentUser(info);
                        })
                    );



    }
    
    register(user: User):  Observable<User> {
        return this.http.post<User>(baseUrl , user,{headers:{
            "content-type":"application/json"
        }});
    }

    _handleError(error:HttpErrorResponse){
        if(error.status === 404){
            //return false as an observable result
            return of(false);  
        } else{
            //else let the error go
            return throwError(()=> error); 
        }
    }
    isEmailRegistered(email: string): Observable<boolean> {

        return this
                    .http
                    .get(`${baseUrl}/validate/${email}`)
                    .pipe(
                        //incase of no error
                        map(response=>true), 
                        //in case of error
                        catchError(this._handleError) 
                    );
       
    }
    getUserStatusAnnouncement(): Subject<LoggedInDetails | undefined> {
       return this.loggedInUserAnnouncement;
    }

  
    logOut():Observable<void> {
        this.updateCurrentUser();
        return of(undefined);
    }
    
}