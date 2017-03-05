import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public select : any;
	public prueba : boolean;
	myForm : FormGroup;
  

  constructor(public navCtrl: NavController,public formBuilder: FormBuilder) {
  	this.myForm = this.createMyForm();
    this.prueba = true;
  }

  private createMyForm(){
    return this.formBuilder.group({  
      select:["",[Validators.required]]
    });
  }

  selectValid(){
      if(this.myForm.get("select").hasError("required")){
        this.prueba = false;
      }else
        this.prueba = true;
  }

}
