// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { LophocComponent } from './lophoc/lophoc.component';
import { ViewlophocComponent } from './lophoc/viewlophoc/viewlophoc.component';
import { CanbogiaovienComponent } from './canbogiaovien/canbogiaovien.component';
import { ViewcanbogiaovienComponent } from './canbogiaovien/viewcanbogiaovien/viewcanbogiaovien.component';
import { HocsinhComponent } from './hocsinh/hocsinh.component';
import { ViewhocsinhComponent } from './hocsinh/viewhocsinh/viewhocsinh.component';
import { DiemComponent } from './diem/diem.component';
import { AdminsComponent } from './admins/admins.component';
import { ViewadminsComponent } from './admins/viewadmins/viewadmins.component';
// import { UserManagementModule } from './user-management/user-management.module';
// import { NhatuyendungComponent } from './nhatuyendung/nhatuyendung.component';
// import { ViewnhatuyendungComponent } from './nhatuyendung/viewnhatuyendung/viewnhatuyendung.component';
// import { UngvienComponent } from './ungvien/ungvien.component';
// import { TintuyendungComponent } from './tintuyendung/tintuyendung.component';
// import { ViewungvienComponent } from './ungvien/viewungvien/viewungvien.component';
// import { ViewtintuyendungComponent } from './tintuyendung/viewtintuyendung/viewtintuyendung.component';
@NgModule({
	declarations: [AdminsComponent, ViewadminsComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
		PartialsModule,
		MailModule,
		ECommerceModule,
		// UserManagementModule,
	],
	providers: []
})
export class PagesModule {
}
