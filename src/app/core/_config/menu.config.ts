export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				// {
				// 	title: 'Dashboards',
				// 	root: true,
				// 	alignment: 'left',
				// 	page: '/dashboard',
				// 	translate: 'MENU.DASHBOARD',
				// },
				//lop hoc
				{
					title: 'Lớp học',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Quản lý Lớp học',
							bullet: 'dot',
							icon: 'flaticon-business',
							submenu: [
								{
									title: 'Danh sách lóp học',
									page: '/lophoc'
								},
								{
									title: 'Danh sách học sinh',
									page: '/hocsinh'
								},
							]
						},
					]
				},
				//Diem
				{
					title: 'Điểm',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Quản lý điểm',
							bullet: 'dot',
							icon: 'flaticon-business',
							submenu: [
								{
									title: 'Danh sách điểm',
									page: '/diem'
								},
							]
						},
					]
				},
				//Canbogiaovien
				{
					title: 'Cán bộ giáo viên',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Quản lý cán bộ giáo viên',
							bullet: 'dot',
							icon: 'flaticon-business',
							submenu: [
								{
									title: 'Danh sách cán bộ giáo viên',
									page: '/canbogiaovien'
								},
							]
						},
					]
				},
				{
					title: 'Học sinh',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Quản lý học sinh',
							bullet: 'dot',
							icon: 'flaticon-business',
							submenu: [
								{
									title: 'Danh sách học sinh',
									page: '/hocsinh'
								},
							]
						},
					]
				},
				//admins
				{
					title: 'Admin',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Quản lý admins',
							bullet: 'dot',
							icon: 'flaticon-business',
							submenu: [
								{
									title: 'Danh sách admins',
									page: '/admins'
								},
								
							]
						},
					]
				},
			]
		},
		aside: {
			self: {},
			items: [
				// {
				// 	title: 'Dashboard',
				// 	root: true,
				// 	icon: 'flaticon2-architecture-and-city',
				// 	page: '/dashboard',
				// 	translate: 'MENU.DASHBOARD',
				// 	bullet: 'dot',
				// },
				{section: 'Lớp học'},
				{
					title: 'Quản lý lớp học',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
					submenu: [
						{
							title: 'Danh sách lớp học',
							page: '/lophoc'
						},
					]
				},
				{section: 'Điểm'},
				{
					title: 'Quản lý điểm',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
					submenu: [
						{
							title: 'Điểm',
							page: '/diem'
						},
					]
				},
				//Cán bộ giáo viên
				{section: 'Cán bộ giáo viên'},
				{
					title: 'Quản lý cán bộ giáo viên',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
					// permission: 'accessToECommerceModule',
					submenu: [
						{
							title: 'Danh sách cán bộ giáo viên',
							page: '/canbogiaovien'
						},
					]
				},
				//Học sinh
				{section: 'Học sinh'},
				{
					title: 'Quản lý học sinh',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
					submenu: [
						{
							title: 'Danh sách học sinh',
							page: '/hocsinh'
						},
					]
				},
				{section: 'Thống kê'},
				{
					title: 'Thống kê',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
					submenu: [
						{
							title: 'Quản lý thống kê',
							page: '/thongke'
						},
					]
				},
				
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
