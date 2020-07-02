import { Injectable } from '@angular/core';
import { ROOT_URL } from '../../../../../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Hocsinh } from '../models/hocsinh.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HocsinhService {
  public baseUrl=ROOT_URL;
  constructor(
    public http:HttpClient
  ) { }
  getAllTodo() :Observable<Hocsinh[]>{
    return this.http.get<Hocsinh[]>(this.baseUrl+"api/HocSinhs" );
  }
  // getChitietLophoc(id: Number){
  //  return this.http.get<Lophoc>(this.baseUrl+"api/lophocs/"+id)
  // }
}
