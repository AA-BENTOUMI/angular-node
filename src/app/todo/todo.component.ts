import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../Service.Service';
import { ActivatedRoute ,Router } from '@angular/router';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private _serviceService: ServiceService ,private _ActivatedRoute: ActivatedRoute ,private Router :Router) { }
  todoForm : FormGroup;
  ngOnInit(): void  {this.todoForm = new FormGroup({

    book : new FormControl('', [Validators.required]),
    
   });
  }
  Adding(){
    this._serviceService.ADD(this.todoForm.value).subscribe(res=>{
      console.log(res)
     
    }) 
   }
}
