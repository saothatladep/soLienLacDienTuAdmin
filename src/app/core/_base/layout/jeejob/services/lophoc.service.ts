import { Injectable } from '@angular/core';
import { ROOT_URL } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lophoc } from '../models/lophoc.class';

@Injectable({
  providedIn: 'root'
})
export class LophocService {

  public baseUrl=ROOT_URL;
  constructor(
    public http:HttpClient
  ) { }
  getLopHoc() :Observable<Lophoc[]>{
    return this.http.get<Lophoc[]>(this.baseUrl+"api/LopHocs" );
  }
  getChitietLophoc(id: Number){
    return this.http.get<Lophoc>(this.baseUrl+"api/lophocs/"+id)
   }
}
