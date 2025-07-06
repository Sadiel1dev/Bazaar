import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from 'uuid';
import { AccountService } from '../../../Core/Services/account.service';
import { ProgressBarModule } from 'primeng/progressbar';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,ProgressBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  login:boolean=true;
  loginForm:FormGroup;
  signForm:FormGroup;
  value: number=0;
  color: string|undefined='#49CC90';

  /**
   *
   */
  constructor(private account:AccountService) {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',Validators.required),
    })

    this.signForm=new FormGroup({
      displayName:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required, Validators.email]),
      password:new FormControl(null,Validators.required),
    })

  }

  ngOnInit(): void {
  }

  onSign(){
    this.account.Register(this.signForm.value).subscribe();
  }
  onSubmit(){
    
    this.account.Login(this.loginForm.value).subscribe();
  }
  pass:string= '';
  CorrectPass(){
    let aux=0;
    this.pass=this.signForm.value.password;
    const regex = /[!@#$%^&*(),.?":{}|<>]/g;
    const regexmayus = /[A-Z]/g;
    const regexNumber = /[0-9]/;

    aux += Math.min(this.pass.length, 8) * 10
    if (regexNumber.test(this.pass)) 
      aux+=6;
    if (regex.test(this.signForm.value.password))
      aux+=7;
    if(regexmayus.test(this.signForm.value.password))
      aux+=7;

    

    this.value=aux;
  }
}
