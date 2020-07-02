// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Components
import {BaseComponent} from './views/theme/base/base.component';
import {ErrorPageComponent} from './views/theme/content/error-page/error-page.component';
// Auth
import {AuthGuard} from './core/auth';

const routes: Routes = [
	{path: 'auth', loadChildren: () => import('app/views/pages/auth/auth.module').then(m => m.AuthModule)},

	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
			},
			// {
			// 	path: 'mail',
			// 	loadChildren: () => import('app/views/pages/apps/mail/mail.module').then(m => m.MailModule),
			// },
			// {
			// 	path: 'ecommerce',
			// 	loadChildren: () => import('app/views/pages/apps/e-commerce/e-commerce.module').then(m => m.ECommerceModule),
			// },
			// {
			// 	path: 'ngbootstrap',
			// 	loadChildren: () => import('app/views/pages/ngbootstrap/ngbootstrap.module').then(m => m.NgbootstrapModule),
			// },
			// {
			// 	path: 'material',
			// 	loadChildren: () => import('app/views/pages/material/material.module').then(m => m.MaterialModule),
			// },

			//lop hoc
			{
				path: 'lophoc',
				loadChildren: () => import('app/views/pages/lophoc/lophoc.module').then(m => m.LopHocModule),
			},
			//Diem
			{
				path: 'diem',
				loadChildren: () => import('app/views/pages/diem/diem.module').then(m => m.DiemModule),
			},
			//Can bộ giáo viên
			{
				path: 'canbogiaovien',
				loadChildren: () => import('app/views/pages/canbogiaovien/canbogiaovien.module').then(m => m.CanBoGiaoVienModule),
			},
			//Học sinh
			{
				path: 'hocsinh',
				loadChildren: () => import('app/views/pages/hocsinh/hocsinh.module').then(m => m.HocSinhModule),
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
		],
	},

	// {path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
