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
			//Admins
			{
				path: 'admins',
				loadChildren: () => import('app/views/pages/admins/admins.module').then(m => m.AdminsModule),
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
