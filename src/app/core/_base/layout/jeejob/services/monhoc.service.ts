import { Injectable } from '@angular/core';
import { MonHoc } from '../models/monhoc.class';
import { ROOT_URL } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonhocService {
  public baseUrl=ROOT_URL;
  constructor(
    public http:HttpClient
  ) { }
  getMonHoc() :Observable<MonHoc[]>{
    return this.http.get<MonHoc[]>(this.baseUrl+"api/MonHocs" );
  }
  getChitietLophoc(id: Number){
    return this.http.get<MonHoc>(this.baseUrl+"api/MonHocs/"+id)
   }
}
