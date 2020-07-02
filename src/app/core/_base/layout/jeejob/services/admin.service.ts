import { Injectable } from '@angular/core';
import { ROOT_URL } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.class';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public baseUrl=ROOT_URL;
  constructor(
    public http:HttpClient
  ) { }
  getAdmin() :Observable<Admin[]>{
    return this.http.get<Admin[]>(this.baseUrl+"api/Admins");
  }
}
  
