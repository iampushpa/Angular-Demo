import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private http : HttpClient) { }

  postdata(dt:any){
     return this.http.post("http://localhost:3000/stud",dt)
  }

  getdata(){
    return this.http.get("http://localhost:3000/stud")
  }

  deletedata(dt2:any){
    return this.http.delete("http://localhost:3000/stud/"+dt2)
  }

  putdata(dt3:any){
    return this.http.put("http://localhost:3000/stud/"+dt3.id ,dt3)
  }
}
