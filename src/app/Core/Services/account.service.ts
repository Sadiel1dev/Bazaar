import { Injectable } from '@angular/core';
import { Constants } from '../Constant/Constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { IUser } from '../Models/Interface/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl : string=Constants.API_URLUSER;
  private baseUrlLogin : string=Constants.API_URLUSER+'/api/Account/login';
  private baseUrlRegister : string=Constants.API_URLUSER+'/api/Account/sign';
  
  private currentUserSource=new BehaviorSubject<IUser>(<IUser>{});
  $currentUser = this.currentUserSource.asObservable();

  constructor(private http: HttpClient,private router:Router) { } 
  

  getCurrentUser(){
    return this.currentUserSource.value;
  }
  loadCurrentUser(token: string){
    let headers= new HttpHeaders();
    headers = headers.set('Authorization',`Bearer ${token}` );

    return this.http.get(this.baseUrl + '/api/Account/getcurrentuser',{headers}).pipe(map(
      (user:any)=>{
        if(user){
          localStorage.setItem("TokkenBazaar",user.token);
          this.currentUserSource.next(user);
        }
      }
    ))
  }
    Login(value:any){
      return this.http.post(this.baseUrlLogin,value).pipe(map(
        (user:any)=>{
          if(user){
            localStorage.setItem("TokkenBazaar",user.token);
            this.currentUserSource.next(user);
            this.router.navigateByUrl('/tienda')
          }
        }
      ))
    }

    Register(value:any){
      return this.http.post(this.baseUrlRegister,value).pipe(map(
        (user:any)=>{
          if(user){
            localStorage.setItem("TokkenBazaar",user.token);
            this.router.navigateByUrl('/tienda')
          }
        }
      ))
    }
    Logout(){
      localStorage.removeItem("TokkenBazaar");
      this.currentUserSource.next(<IUser>{});
      this.router.navigateByUrl('/tienda')
    }

    CheckEmailExist(email:string){
      return this.http.get(this.baseUrl + '/api/Account/emailexist?email=' + email)
    }
}
