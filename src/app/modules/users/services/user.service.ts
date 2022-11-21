import { Observable, Subject } from "rxjs";
import { LoggedInDetails, LoginInfo, User } from "../models/user";

// Interface for User with essential methods
export interface UserService
{
    login(loginInfo:LoginInfo):Observable<LoggedInDetails>;

    register(user:User):Observable<User>;

    isEmailRegistered(email:string):Observable<boolean>;

    getUserStatusAnnouncement():Subject<LoggedInDetails|undefined>;

    logOut():Observable<void>;
    
    getAuthenticationHeader():any;

    getLoggedInUser():LoggedInDetails|undefined;

    getUserByEmail(email:string):Observable<User>;

    
}