import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  public myForm : any ;
  public submitted : boolean = false;

  public idd : any;
  public unn : any;
  public em : any;
  public ad : any;
  public ps : any

  constructor(private fb:FormBuilder){
    this.myForm = this.fb.group({
      uname : [''],
      eml : [''],
      add : [''],
      pass : ['']
    })

    
  }

  onsubmitData(){
    this.submitted = true;
    console.log(this.myForm);
    console.log(this.myForm.value)
  }

  onDeleteData(dt:any){}

  onUpdateData(dt1:any){}

  updateBtn(dt2:any){}

}
