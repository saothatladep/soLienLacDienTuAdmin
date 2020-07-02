import { Component, OnInit } from '@angular/core';
import { Hocsinh } from '../../../../core/_base/layout/jeejob/models/hocsinh.class';
import { ActivatedRoute } from '@angular/router';
import { HocsinhService } from '../../../../core/_base/layout/jeejob/services/hocsinh.service';

@Component({
  selector: 'kt-viewhocsinh',
  templateUrl: './viewhocsinh.component.html',
  styleUrls: ['./viewhocsinh.component.scss']
})
export class ViewhocsinhComponent implements OnInit {

  public hocsinhs: Hocsinh[]=[];
  constructor(
    public activateRoute:ActivatedRoute,
    public serviceHocsinh: HocsinhService,
		//public Baseservice: BaseService,
	) {}

	ngOnInit(): void {
    this.loadData();
  }
  
  loadData(){
    this.serviceHocsinh.getAllTodo().subscribe(
			(data) => {
        this.hocsinhs = data;
        console.log(data)
      },
      
		);
	}

}
