import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-starter';

  myForm!:FormGroup;

  constructor(private fb:FormBuilder) {
    this.myForm = this.fb.group({
      name:"",

      addresses: this.fb.array([this.createAddress()])
    })
  }
  createAddress() {
    return this.fb.group({
      street:[''],
      city:['']
    })
  }

  // Getter for the FormArray
  get addresses() {
    return this.myForm.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(this.createAddress())
  }

  removeAddress(index:number) {
    this.addresses.removeAt(index)
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  onSubmit() {
    console.log(this.myForm.value);

  }



}
