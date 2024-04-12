import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private _http:HttpClient) { }

  loginData:any={};
  addtocart:any=[];
  person:any=[];
  count:any=true;

  addForm(data:any):Observable<any>{
       return this._http.post(' http://localhost:3000/Form',data);
  }
  
  getForm():Observable<any>{
    return this._http.get(' http://localhost:3000/Form');
}
  deleteData(id:number):Observable<any>{
    return this._http.delete(' http://localhost:3000/Form'+"/"+id);
}
putData(id:Number,body: object): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  return this._http.put(`http://localhost:3000/Form/${id}`, body, { headers });
}

}
