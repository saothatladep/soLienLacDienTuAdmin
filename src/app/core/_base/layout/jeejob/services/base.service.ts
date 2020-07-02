import { Injectable } from '@angular/core';
import { ROOT_URL } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
//import { Diadiemlamviec } from '../models/base.class';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public baseUrl = ROOT_URL; 
  constructor(
    public http:HttpClient
  ) { }

  // getAllDiadiemlamviec(){
  //   return this.http.get<Diadiemlamviec[]>(this.baseUrl+"api/diadiemlamviecs")
  // }

  handleError(err){
    if(err.error instanceof Error){
      console.log(`Client-said error : ${err.error.message}`)
    }else{
      console.log(`Server-said error : ${err.status} - ${err.error}`)
    }
  }
}
