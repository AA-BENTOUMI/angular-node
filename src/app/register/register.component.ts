import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../Service.Service';
import { ActivatedRoute ,Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _serviceService: ServiceService ,private _ActivatedRoute: ActivatedRoute ,private Router :Router) { }
  
  registerForm : any ;
  id = Math.floor(Math.random()*1000)+1;
  
  ngOnInit(): void {

     this.registerForm = new FormGroup({
     
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
    
     });
    
  }
  registe(){
    this._serviceService.regis(this.registerForm.value).subscribe(res=>{
      console.log(res)
      this.Router.navigateByUrl('/login');
    }) 
   }
}
