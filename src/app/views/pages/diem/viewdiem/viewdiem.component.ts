import { Component, OnInit } from '@angular/core';
import { Diem } from '../../../../core/_base/layout/jeejob/models/diem.class';
import { DiemService } from '../../../../core/_base/layout/jeejob/services/diem.service';
import { ActivatedRoute } from '@angular/router';
import { KhoihocService } from '../../../../core/_base/layout/jeejob/services/khoihoc.service';
import { KhoiHoc } from '../../../../core/_base/layout/jeejob/models/khoihoc.class';
import { LophocService } from '../../../../core/_base/layout/jeejob/services/lophoc.service';
import { Lophoc } from '../../../../core/_base/layout/jeejob/models/lophoc.class';
import { MonhocService } from '../../../../core/_base/layout/jeejob/services/monhoc.service';
import { MonHoc } from '../../../../core/_base/layout/jeejob/models/monhoc.class';

@Component({
  selector: 'kt-viewdiem',
  templateUrl: './viewdiem.component.html',
  styleUrls: ['./viewdiem.component.scss']
})
export class ViewdiemComponent implements OnInit {

  public diems=[];
  public khoihocs: KhoiHoc[] = [];
  public lophocs: Lophoc[] = [];
  public monhocs: MonHoc[] = [];
  constructor(
    public activateRoute:ActivatedRoute,
    public serviceDiem: DiemService,
    public serviceKhoihoc: KhoihocService,
    public serviceLopHoc: LophocService,
    public serviceMonHoc:MonhocService
	) {}
//
	ngOnInit(): void {
    this.loadKhoi();
    this.loadData();
    this.loadLopHoc();
    this.loadMonHoc();
  }

  
loadKhoi(){
  this.serviceKhoihoc.getKhoiHoc().subscribe(data => {
    this.khoihocs = data;
    console.log(this.khoihocs);
  }
  )
}
loadMonHoc(){
  this.serviceMonHoc.getMonHoc().subscribe(data => {
    this.monhocs = data;
    console.log(this.monhocs);
  }
  )
}
loadLopHoc(){
  this.serviceLopHoc.getLopHoc().subscribe(data => {
    this.lophocs = data;
    console.log(this.lophocs);
  }
  )
}
//Sự kiên change

// onChangerKhoiHoc(maKhoi: number){
//   if(maKhoi){
//     this.serviceDiem.getLopHoc(maKhoi).subscribe(
//       data =>{
//         this.lophocs = data;
//         this.monhocs = null;
//     );
//       }
//     )
//   }
// }

loadData(){
    this.serviceDiem.getDiem().subscribe(
			(data) => {
        this.diems = data;
        console.log(this.diems[0].maHs)
        for(let i = 0;i<this.diems.length;i++){
          this.serviceDiem.getStudent(this.diems[i].maHs).subscribe((value) => {
           this.diems[i].tenHs = value.tenHs
          })

        }
      },
      
		);
	}

}
