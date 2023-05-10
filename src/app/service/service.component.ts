import { Component } from '@angular/core';
import { ServiceInfoService } from '../service-info.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  // public empdata1 : any ;
  // public empdata2 : any;

  // constructor(private si : ServiceInfoService){
  //   this.getEmpData();
  //   this.postEmpData();
  // }

  // getEmpData(){
  //   // this.si.getempdata();
  //   console.log(this.si.getempdata());
  //   this.empdata1 = this.si.getempdata();
  // }

  // postEmpData(){
  //   this.empdata2 = [{
  //     name : "B",
  //     age : 21,
  //     captcha : "cvb"
  //   }]
    
  //   this.si.postempdata(this.empdata2)
  // }


  public data : any;
  constructor(private si : ServiceInfoService){
    this.getApiData();
  }

  getApiData(){
    this.si.getapidata().subscribe(
      ((res:any)=>{
        console.log(res);
        this.data = res;
      }),
      ((err:any)=>{
        console.log(err);
      })
      )
  }

  postApiData(dt:any){
    this.si.postapidata(dt.value).subscribe(
      ((res:any)=>{
        console.log(res);
      }),
      ((err:any)=>{
        console.log(err);
      })
    )
  }
}
