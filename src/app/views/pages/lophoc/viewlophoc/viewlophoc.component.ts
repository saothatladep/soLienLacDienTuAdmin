import { Component, OnInit } from '@angular/core';
import { Lophoc } from '../../../../core/_base/layout/jeejob/models/lophoc.class';
import { ActivatedRoute } from '@angular/router';
import { LophocService } from '../../../../core/_base/layout/jeejob/services/lophoc.service';

@Component({
  selector: 'kt-viewlophoc',
  templateUrl: './viewlophoc.component.html',
  styleUrls: ['./viewlophoc.component.scss']
})
export class ViewlophocComponent implements OnInit {

  public lophocs: Lophoc[]=[];
  constructor(
    public activateRoute:ActivatedRoute,
    public serviceLophoc: LophocService,
		//public Baseservice: BaseService,
	) {}

	ngOnInit(): void {
    this.loadData();
  }
  
  loadData(){
    this.serviceLophoc.getLopHoc().subscribe(
			(data) => {
        this.lophocs = data;
        console.log(data)
      },
      
		);
	}

}
