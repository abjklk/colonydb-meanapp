import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColonyService {

  constructor(private http:HttpClient) { }

  getColonies(){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.get<any>('http://localhost:3000/colony/colony', {headers: headers});
  }

  getColonybyId(id){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post<any>('http://localhost:3000/colony/byid', id, {headers: headers});
  }

  insertColony(colony){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post<any>('http://localhost:3000/colony/addcolony', colony, {headers: headers});  
  }
}
