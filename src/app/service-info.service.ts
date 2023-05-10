import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceInfoService {

  // public emp : any;

  // constructor() { 
  //   this.emp = [{
  //     name : "A",
  //     age : 20,
  //     city : "A"
  //   }]
  // }

  // getempdata(){
  //   return this.emp;
  // }

  // postempdata(dt:any){
  //   console.log(dt);
  // }

  constructor(private http : HttpClient){}

  getapidata(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  postapidata(dt:any){
    return this.http.post("https://jsonplaceholder.typicode.com/users",dt)
  }

}
