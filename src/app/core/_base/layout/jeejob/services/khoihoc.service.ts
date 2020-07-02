import { Injectable } from '@angular/core';
import { ROOT_URL } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { KhoiHoc } from '../models/khoihoc.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KhoihocService {

  public baseUrl=ROOT_URL;
  constructor(
    public http:HttpClient
  ) { }
  getKhoiHoc() :Observable<KhoiHoc[]>{
    return this.http.get<KhoiHoc[]>(this.baseUrl+"api/khoihocs" );
  }
  getChitietKhoiHoc(id: Number){
    return this.http.get<KhoiHoc>(this.baseUrl+"api/khoihocs/"+id)
   }
}
