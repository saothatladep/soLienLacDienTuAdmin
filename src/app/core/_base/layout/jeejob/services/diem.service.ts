import { Injectable } from '@angular/core';
import { ROOT_URL } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Diem } from '../models/diem.class';
import { Observable } from 'rxjs';
import { Hocsinh } from '../models/hocsinh.class';
import { KhoiHoc } from '../models/khoihoc.class';
import { Lophoc } from '../models/lophoc.class';
import { MonHoc } from '../models/monhoc.class';

@Injectable({
  providedIn: 'root'
})
export class DiemService {
  public baseUrl=ROOT_URL;
  constructor(
    public http:HttpClient
  ) { }
  getDiem() :Observable<Diem[]>{
    return this.http.get<Diem[]>(this.baseUrl+"api/Diems" );
  }
  getChitietLophoc(id: Number){
    return this.http.get<Diem>(this.baseUrl+"api/Diems/"+id);
   }

   getStudent(id:String){
     return this.http.get<Hocsinh>(this.baseUrl+"api/hocsinhs/"+id);
   }
  getKhoiHoc() :Observable<KhoiHoc[]>{
    return this.http.get<KhoiHoc[]>(this.baseUrl+"api/khoihocs" );
  }
  getLopHoc() :Observable<Lophoc[]>{
    return this.http.get<Lophoc[]>(this.baseUrl+"api/LopHocs" );
  }
  getMonHoc() :Observable<MonHoc[]>{
    return this.http.get<MonHoc[]>(this.baseUrl+"api/MonHocs" );
  }
}
