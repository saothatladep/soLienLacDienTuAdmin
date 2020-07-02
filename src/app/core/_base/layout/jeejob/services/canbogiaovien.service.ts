import { Injectable } from '@angular/core';
import { ROOT_URL } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Canbogiaovien } from '../models/canbogiaovien.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanbogiaovienService {

  public baseUrl=ROOT_URL;
  constructor(
    public http:HttpClient
  ) { }
  getAllTodo() :Observable<Canbogiaovien[]>{
    return this.http.get<Canbogiaovien[]>(this.baseUrl+"api/CanBoGiaoViens" );
  }
}
