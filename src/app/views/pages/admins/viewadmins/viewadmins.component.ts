import { Component, OnInit } from '@angular/core';
import { Admin } from '../../../../core/_base/layout/jeejob/models/admin.class';
import { AdminService } from '../../../../core/_base/layout/jeejob/services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kt-viewadmins',
  templateUrl: './viewadmins.component.html',
  styleUrls: ['./viewadmins.component.scss']
})
export class ViewadminsComponent implements OnInit {

  public admins: Admin[]=[];
  constructor(
    public activateRoute: ActivatedRoute,
    public serviceAdmin: AdminService,
	) {}

	ngOnInit(): void {
    this.loadAdmin();
  }
  
  loadAdmin(){
    this.serviceAdmin.getAdmin().subscribe(
			(data) => {
        this.admins = data;
        console.log(data)
      },
      
		);
	}

}
