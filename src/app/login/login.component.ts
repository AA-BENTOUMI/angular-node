import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../Service.Service';
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
token;
  constructor(private _serviceService: ServiceService ,private _ActivatedRoute: ActivatedRoute ,private Router :Router) {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token')
      
    }
   }
  
  loginForm : FormGroup;

  ngOnInit(): void 
  {this.loginForm = new FormGroup({
    email : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
   });
  }
  log(){
    this._serviceService.login(this.loginForm.value).subscribe(res=>{
      console.log(res)
      this.Router.navigateByUrl('/todo');
      this.token=res;
      localStorage.setItem('token',this.token.token)
     
    })  }
}
