import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  public allData : any = [];

  public count : number = 1;
  public showTable : boolean = false;

  public idd : any;
  public unn : any;
  public em : any;
  public ad : any;
  public ps : any;


  onSubmitData(data:any){
    console.log(data.value);
    if(data.value.id == undefined){
      data.value.id = this.count;
      this.allData.push(data.value);
      if(this.allData.length>0){
        this.showTable = true;
      }
      this.count++;
    }else{
      this.allData.forEach((element:any)=>{
        if(data.value.id == element.id){
        element.uname = data.value.uname;
        element.eml = data.value.eml;
        element.add = data.value.add;
        element.pass = data.value.pass;
        }
      });
      console.log(this.allData)
    }
  }

  onDeleteData(dt:any){
    console.log(dt);
    console.log(this.allData);
    this.allData.forEach((element:any, index:any)=>{
      if(element.id == dt.id){
        this.allData.splice(index,1)
      }
    })
  }

  onUpdateData(data2:any){
    console.log(data2);
    this.idd = data2.id;
    this.unn = data2.uname;
    this.em = data2.eml;
    this.ad = data2.add;
    this.ps = data2.pass;
  }

  updateBtn(dt2:any){}

}
