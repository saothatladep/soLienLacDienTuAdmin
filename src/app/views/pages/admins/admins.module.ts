import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbAlertConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartialsModule } from '../../partials/partials.module';
import { CoreModule } from '../../../core/core.module';
import { MaterialPreviewModule } from '../../partials/content/general/material-preview/material-preview.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AdminsComponent } from './admins.component';
import { ViewadminsComponent } from './viewadmins/viewadmins.component';



const routes: Routes = [
	{
		path: '',
		component: ViewadminsComponent
		
        ,
		children: [
			{
				path: 'listadmin',
                component: 
                AdminsComponent
			},

		]
	}
];

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		NgbModule,
		CoreModule,
		MaterialPreviewModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		PerfectScrollbarModule
	],
	exports: [RouterModule],
	declarations: [
      AdminsComponent,
      ViewadminsComponent,

	],
	providers: [
		NgbAlertConfig, ],
	entryComponents: [
	]
})
export class AdminsModule {
}
