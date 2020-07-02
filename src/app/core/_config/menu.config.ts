export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			items: [
				{
					title: 'Dashboards',
					root: true,
					alignment: 'left',
					page: '/dashboard',
					translate: 'MENU.DASHBOARD',
				},
				// {
				// 	title: 'Nhà tuyển dụng',
				// 	root: true,
				// 	alignment: 'left',
				// 	toggle: 'click',
				// 	submenu: [
				// 		{
				// 			title: 'Quản lý nhà tuyển dụng',
				// 			bullet: 'dot',
				// 			icon: 'flaticon-business',
				// 			// permission: 'accessToECommerceModule',
				// 			submenu: [
				// 				{
				// 					title: 'Danh sách nhà tuyển dụng',
				// 					page: '/nhatuyendung/listnhatuyendung'
				// 				},
				// 				// {
				// 				// 	title: 'Chi tiết nhà tuyển dụng',
				// 				// 	page: '/nhatuyendung/chitietnhatuyendung'
				// 				// },
								
				// 			]
				// 		},
				// 	]
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
							// permission: 'accessToECommerceModule',
							submenu: [
								{
									title: 'Danh sách lóp học',
									page: '/lophoc'
								},
								{
									title: 'Danh sách học sinh',
									page: '/hocsinh'
								},
								// {
								// 	title: 'Chi tiết ứng viên',
								// 	page: '/ungvien/chitietungvien'
								// },
								
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
							// permission: 'accessToECommerceModule',
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
							// permission: 'accessToECommerceModule',
							submenu: [
								{
									title: 'Danh sách cán bộ giáo viên',
									page: '/canbogiaovien'
								},
								// {
								// 	title: 'Chi tiết ứng viên',
								// 	page: '/ungvien/chitietungvien'
								// },
								
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
							// permission: 'accessToECommerceModule',
							submenu: [
								{
									title: 'Danh sách học sinh',
									page: '/hocsinh'
								},
								// {
								// 	title: 'Chi tiết ứng viên',
								// 	page: '/ungvien/chitietungvien'
								// },
								
							]
						},
					]
				},
				{
					title: 'Thống kê',
					root: true,
					alignment: 'left',
					toggle: 'click',
					submenu: [
						{
							title: 'Thống kê',
							bullet: 'dot',
							icon: 'flaticon-business',
							// permission: 'accessToECommerceModule',
							submenu: [
								{
									title: 'Quản lý thống kê',
									page: '/thongke'
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
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: '/dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{section: 'Lớp học'},
				{
					title: 'Quản lý lớp học',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
					// permission: 'accessToECommerceModule',
					submenu: [
						{
							title: 'Danh sách lớp học',
							page: '/lophoc'
						},
						// {
						// 	title: 'Chi tiết ứng viên',
						// 	page: '/ungvien/chitietungvien'
						// },
					]
				},
				{section: 'Điểm'},
				{
					title: 'Quản lý điểm',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
					// permission: 'accessToECommerceModule',
					submenu: [
						{
							title: 'Điểm',
							page: '/diem'
						},
						// {
						// 	title: 'Chi tiết ứng viên',
						// 	page: '/ungvien/chitietungvien'
						// },
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
						// {
						// 	title: 'Chi tiết ứng viên',
						// 	page: '/ungvien/chitietungvien'
						// },
					]
				},
				//Học sinh
				{section: 'Học sinh'},
				{
					title: 'Quản lý học sinh',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
					// permission: 'accessToECommerceModule',
					submenu: [
						{
							title: 'Danh sách học sinh',
							page: '/hocsinh'
						},
						// {
						// 	title: 'Chi tiết ứng viên',
						// 	page: '/ungvien/chitietungvien'
						// },
					]
				},
				// {section: 'Tin tuyển dụng'},
				// {
				// 	title: 'Quản lý tin tuyển dụng',
				// 	bullet: 'dot',
				// 	icon: 'flaticon2-list-2',
				// 	root: true,
				// 	// permission: 'accessToECommerceModule',
				// 	submenu: [
				// 		{
				// 			title: 'Danh sách tin tuyển dụng',
				// 			page: '/tintuyendung/listtintuyendung'
				// 		},
				// 		// {
				// 		// 	title: 'Chi tiết tin tuyển dụng',
				// 		// 	page: '/tintuyendung/chitiettintuyendung'
				// 		// },
				// 	]
				// },
				{section: 'Thống kê'},
				{
					title: 'Thống kê',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
					// permission: 'accessToECommerceModule',
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
