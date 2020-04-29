import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  form:FormGroup

  ngOnInit(): void {
    this.form=new FormGroup({
      'name':new FormControl(null,Validators.required),
    })
  }

  onSubmit(){
    let name=this.form.value.name;
    alert(name)
  }

}
