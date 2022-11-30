export interface LoginInfo
{
    email:string;
    password:string;
}
export interface User extends LoginInfo
{
    name:string;
    profilePic:string;
    phoneNumber:string;
    aadhaarId:string;
    userBookings?:any;
}

// Created LoggedInDetails with user and token for authentication
export interface LoggedInDetails
{
    user:User;
    token:string;
}