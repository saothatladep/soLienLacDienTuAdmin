import { Component, OnInit } from '@angular/core';
import { Canbogiaovien } from '../../../../core/_base/layout/jeejob/models/canbogiaovien.class';
import { ActivatedRoute } from '@angular/router';
import { CanbogiaovienService } from '../../../../core/_base/layout/jeejob/services/canbogiaovien.service';

@Component({
  selector: 'kt-viewcanbogiaovien',
  templateUrl: './viewcanbogiaovien.component.html',
  styleUrls: ['./viewcanbogiaovien.component.scss']
})
export class ViewcanbogiaovienComponent implements OnInit {

  public canbogiaoviens: Canbogiaovien[]=[];
  constructor(
    public activateRoute:ActivatedRoute,
    public serviceLophoc: CanbogiaovienService,
		//public Baseservice: BaseService,
	) {}

	ngOnInit(): void {
    this.loadData();
  }
  
  loadData(){
    this.serviceLophoc.getAllTodo().subscribe(
			(data) => {
        this.canbogiaoviens = data;
        console.log(data)
      },
      
		);
	}
}
