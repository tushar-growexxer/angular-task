import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup;
  error: string|null = null;

  constructor(private authService:AuthService,private router:Router) {
  }
 ngOnInit() {
   this.loginForm = new FormGroup({
     email:new FormControl([''],[Validators.required,Validators.email]),
     password:new FormControl([''],[Validators.required]),
   })
 }

  onSubmit() {
    // console.log(this.loginForm.get('email'))
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    if(this.loginForm.valid){
      if(this.authService.login(email,password)){
        this.router.navigate(['/contacts'])
      }
      else{
        this.error = "No User Found";
      }
    }
    else {
      console.log(email)
      if(email===null){
        this.error = "Email is not valid"
      }
      else {
        this.error = "Email is required"
      }
    }
  }
}
