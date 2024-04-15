import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Models/User';
import { AuthService } from '../../Services/login/login.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  user=new User()
private url="http://localhost:8080/auth/login"

  constructor(private serviceuser:AuthService,private router:Router,private httpClient:HttpClient){

  }
  userlogin(user:User):Observable <User>{
return this.httpClient.post<User> (this.url,user) ;   }

     onSubmit()  {
      this.userlogin(this.user).subscribe((data :any) =>{
        if(data && data.token){
        localStorage.setItem('token',data.token);
        this.router.navigate(['/home']);
      }

     },(error)=> {
      console.error("login failed",error);
     })
  }
  ngOnInit(): void {

  }


}


