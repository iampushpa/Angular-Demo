import { Component } from '@angular/core';
import { ApiCrudService } from '../api-crud.service';

@Component({
  selector: 'app-api-crud',
  templateUrl: './api-crud.component.html',
  styleUrls: ['./api-crud.component.css']
})
export class ApiCrudComponent {

  constructor(private ac : ApiCrudService){
    this.getalldata();
  }

  public allData : any = [];

  public idd : any;
  public unn : any;
  public em : any;
  public ad : any;
  public ps : any;


  onSubmitData(data:any){
    console.log(data.value);
    this.ac.postdata(data.value).subscribe(
      ((res:any)=>{
        console.log(res);
      }),
      ((err:any)=>{
        console.log(err);
      })
    )
  }

  getalldata(){
    this.ac.getdata().subscribe(
      ((res:any)=>{
        console.log(res);
        this.allData = res;
      }),
      ((err:any)=>{
        console.log(err)
      })
    )
  }

  onDeleteData(dt1:any){
    this.ac.deletedata(dt1.id).subscribe(
      ((res:any)=>{
        console.log(res);
        this.getalldata();
      }),
      ((err:any)=>{
        console.log(err);
      })
    )
  }

  onUpdateData(dt2:any){
    console.log(dt2);
    this.idd = dt2.id;
    this.unn = dt2.uname;
    this.em = dt2.eml;
    this.ad = dt2.add;
    this.ps = dt2.pass;
  }

  updateBtn(dt3:any){
    console.log(dt3);
    this.ac.putdata(dt3.value).subscribe(
      ((res:any)=>{
        console.log(res);
        this.getalldata();
      }),
      ((err:any)=>{
        console.log(err);
      })

    )
  }



}
