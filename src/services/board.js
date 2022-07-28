const boards = [
	{
		_id: 'b101',
		title: 'Sprint July 2022',
		createdAt: 1589983468418,
		createdBy: {
			_id: 'u101',
			fullName: 'Anton Kandyba',
			imgUrl: 'https://ca.slack-edge.com/T035GULFZRD-U03BURAF5QB-99b3505536a1-512',
		},
		cmpsOrder: [
			'people',
			'status',
			'priority',
			'date',
			'checkbox',
			'link',
			'text',
		],
		groupsOrder: ['g101', 'g102', 'g103'],
		labels: {
			status: [
				{
					id: 'l101',
					title: '',
					color: '#c4c4c4',
				},
				{
					id: 'l102',
					title: 'Done',
					color: '#00c875',
				},
				{
					id: 'l103',
					title: 'Stuck',
					color: '#e2445c',
				},
				{
					id: 'l104',
					title: 'Working on it',
					color: '#fdab3d',
				},
			],
			priority: [
				{
					id: 'p101',
					title: '',
					color: '#c4c4c4',
				},
				{
					id: 'p102',
					title: 'Critical',
					color: '#333333',
				},
				{
					id: 'p103',
					title: 'High',
					color: '#401694',
				},
				{
					id: 'p104',
					title: 'Medium',
					color: '#5559df',
				},
				{
					id: 'p105',
					title: 'Low',
					color: '#579bfc',
				},
			],
		},
		members: [
			{
				_id: 'u101',
				fullName: 'Stan Smith',
				imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
			},
			{
				_id: 'u102',
				fullName: 'Roy Boy',
				imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
			},
		],
		groups: [
			{
				id: 'g101',
				title: 'Calendar',
				style: {
					color: '#0086c0',
					addTaskColor: '#7ec2df',
				},
				tasks: [
					{
						id: 't101',
						title: 'Production Design',
						statusId: 'l102',
						priorityId: 'p102',
						people: [
							{
								_id: 'u101',
								fullName: 'Stan Smith',
								imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
							},
							{
								_id: 'u102',
								fullName: 'Roy Boy',
								imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
							},
						],
						date: 1658005200000,
						checkbox: true,
						txt: 'This task is not so important',
						link: 'http://facebook.com',
						comments: [
							{
								id: 'lkbff',
								txt: 'Not sure i wanna do this',
								createdAt: 1590999817436,
								byMember: {
									_id: 'u102',
									fullName: 'Roy Boy',
									imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
								},
							},
						],
					},
					{
						id: 't102',
						title: 'Technical Design',
						statusId: 'l101',
						priorityId: 'p101',
						people: [
							{
								_id: 'u101',
								fullName: 'Stan Smith',
								imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
							},
						],
						date: 1658178000000,
						checkbox: false,
						txt: 'This task is SUPER important',
						link: 'http://google.com',
						comments: [
							{
								id: 'ZdPnm',
								txt: 'also, Anton please CR this',
								createdAt: 1590999817436,
								byMember: {
									_id: 'u101',
									fullName: 'Stan Smith',
									imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
								},
							},
						],
					},
					{
						id: 't103',
						title: 'Production Design',
						statusId: 'l104',
						priorityId: 'p105',
						people: [
							{
								_id: 'u102',
								fullName: 'Roy Boy',
								imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
							},
						],
						date: 1658696400000,
						checkbox: false,
						txt: 'Please call me when done',
						link: 'http://monday.com',
						comments: [{}],
					},
					{
						id: 't104',
						title: 'UI demo in teams',
						statusId: 'l104',
						priorityId: 'p101',
						people: [],
						date: 1693342800000,
						checkbox: true,
						txt: '',
						link: '',
						comments: [],
					},
					{
						id: 't105',
						title: 'PWA',
						statusId: 'l103',
						priorityId: 'p104',
						people: [],
						date: 794095200000,
						checkbox: true,
						txt: '',
						link: '',
						comments: [],
					},
				],
			},
			{
				id: 'g102',
				style: {
					color: '#ff642e',
					addTaskColor: '#ffb095',
				},
				title: 'Tasks',
				tasks: [
					{
						id: 't110',
						title: 'Create skeleton',
						statusId: 'l103',
						priorityId: 'p103',
						people: [
							{
								_id: 'u102',
								fullName: 'Roy Boy',
								imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
							},
						],
						date: 1641333600000,
						checkbox: false,
						txt: '',
						link: 'http://airbnb.com',
						comments: [
							{
								id: 'Ty2nd',
								txt: 'I need some help please',
								createdAt: 1590999817436,
								byMember: {
									_id: 'u102',
									fullName: 'Roy Boy',
									imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
								},
							},
							{
								id: '12Dvg',
								txt: "I'll be with you in a moment",
								createdAt: 1590999817436.0,
								byMember: {
									_id: 'u101',
									fullName: 'Stan Smith',
									imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
								},
							},
						],
					},
					{
						id: 't111',
						title: 'Add home page',
						statusId: 'l102',
						priorityId: 'p103',
						people: [],
						date: 1648760400000,
						checkbox: false,
						txt: 'important to Moshe Cohen',
						link: '',
						comments: [{}],
					},
					{
						id: 't112',
						title: 'Add filter',
						statusId: 'l101',
						priorityId: 'p102',
						people: [
							{
								_id: 'u101',
								fullName: 'Stan Smith',
								imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
							},
						],
						date: 1632949200000,
						checkbox: true,
						txt: '',
						link: 'skeleton.com',
						comments: [{}],
					},
					{
						id: 't113',
						title: 'Fix components logic',
						statusId: 'l104',
						priorityId: 'p101',
						people: [
							{
								_id: 'u101',
								fullName: 'Stan Smith',
								imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
							},
							{
								_id: 'u102',
								fullName: 'Roy Boy',
								imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
							},
						],
						date: 1590999817436,
						checkbox: false,
						txt: 'Check the spreadsheet',
						link: '',
						comments: [{}],
					},
				],
			},
			{
				id: 'g103',
				style: {
					color: '#ffcb00',
					addTaskColor: '#ffe47e',
				},
				title: 'Bugs',
				tasks: [
					{
						id: 't130',
						title: "Can't load images",
						statusId: 'l103',
						priorityId: 'p103',
						people: [],
						date: 1737237600000,
						checkbox: false,
						txt: '',
						link: '',
						comments: [
							{
								id: 'Ty2nd',
								txt: 'I need some help please',
								createdAt: 1590999817436,
								byMember: {
									_id: 'u102',
									fullName: 'Roy Boy',
									imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
								},
							},
							{
								id: '12Dvg',
								txt: "I'll be with you in a moment",
								createdAt: 1590999817436.0,
								byMember: {
									_id: 'u101',
									fullName: 'Stan Smith',
									imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
								},
							},
						],
					},
					{
						id: 't131',
						title: "Modal dosen't open",
						statusId: 'l104',
						priorityId: 'p105',
						people: [
							{
								_id: 'u101',
								fullName: 'Stan Smith',
								imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
							},
							{
								_id: 'u102',
								fullName: 'Roy Boy',
								imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
							},
						],
						date: 1652562000000,
						checkbox: false,
						txt: 'important to Moshe Cohen',
						link: 'www.dropbox.com',
						comments: [{}],
					},
					{
						id: 't132',
						title: 'Colors are not showing as intended',
						statusId: 'l104',
						priorityId: 'p102',
						people: [
							{
								_id: 'u101',
								fullName: 'Stan Smith',
								imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
							},
						],
						date: 1664830800000,
						checkbox: false,
						txt: '',
						link: '',
						comments: [{}],
					},
					{
						id: 't133',
						title: 'Scroll bar in not correct',
						statusId: 'l104',
						priorityId: 'p105',
						people: [],
						date: 26431200000,
						checkbox: false,
						txt: 'not very important for now',
						link: '',
						comments: [{}],
					},
				],
			},
		],
		activities: [
			{
				change: 'Changed Color',
				createdAt: 154514,
				byMember: {
					_id: 'u101',
					fullName: 'Stan Smith',
					imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
				},
				taskTitle: 'Im in group 2 right?',
			},
			{
				change: 'Changed task status',
				createdAt: 154514,
				byMember: {
					_id: 'u102',
					fullName: 'Roy Boy',
					imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
				},
				taskTitle: 'Add home page',
			},
		],
	},
	{
		_id: 'b102',
		title: 'Week 2',
		createdAt: 1589983468418,
		createdBy: {
			_id: 'u102',
			fullName: 'bill',
			imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
		},
		cmpsOrder: [
			'people',
			'status',
			'priority',
			'date',
			'checkbox',
			'link',
			'text',
		],
		groupsOrder: ['g101', 'g102', 'g103'],
		labels: {
			status: [
				{
					id: 'l101',
					title: '',
					color: '#c4c4c4',
				},
				{
					id: 'l102',
					title: 'Done',
					color: '#00c875',
				},
				{
					id: 'l103',
					title: 'Stuck',
					color: '#e2445c',
				},
				{
					id: 'l104',
					title: 'Working on it',
					color: '#fdab3d',
				},
			],
			priority: [
				{
					id: 'p101',
					title: '',
					color: '#c4c4c4',
				},
				{
					id: 'p102',
					title: 'Critical',
					color: '#333333',
				},
				{
					id: 'p103',
					title: 'High',
					color: '#401694',
				},
				{
					id: 'p104',
					title: 'Medium',
					color: '#5559df',
				},
				{
					id: 'p105',
					title: 'Low',
					color: '#579bfc',
				},
			],
		},
		members: [
			{
				_id: 'u101',
				fullName: 'Stan Smith',
				imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
			},
			{
				_id: 'u102',
				fullName: 'Roy Boy',
				imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
			},
		],
		groups: [
			{
				id: 'g110',
				title: 'Day1',
				style: {
					color: '#0086c0',
					addTaskColor: '#7ec2df',
				},
				tasks: [
					{
						id: 't101',
						title: 'Do that',
						statusId: 'l101',
						priorityId: 'p101',
						people: [
							{
								_id: 'u101',
								fullName: 'Stan Smith',
								imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
							},
						],
						date: 1590999817436,
						checkbox: false,
						txt: 'This task is SUPER important',
						link: 'http://google.com',
						comments: [
							{
								id: 'ZdPnm',
								txt: 'also, Anton please CR this',
								createdAt: 1590999817436,
								byMember: {
									_id: 'u101',
									fullName: 'Stan Smith',
									imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
								},
							},
						],
					},
					{
						id: 't102',
						title: 'Do what?',
						statusId: 'l102',
						priorityId: 'p102',
						people: [
							{
								_id: 'u101',
								fullName: 'Stan Smith',
								imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
							},
							{
								_id: 'u102',
								fullName: 'Roy Boy',
								imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
							},
						],
						date: 1590999817436,
						checkbox: true,
						txt: 'This task is not so important',
						link: 'http://facebook.com',
						comments: [
							{
								id: 'lkbff',
								txt: 'Not sure i wanna do this',
								createdAt: 1590999817436,
								byMember: {
									_id: 'u102',
									fullName: 'Roy Boy',
									imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
								},
							},
						],
					},
				],
			},
			{
				id: 'g111',
				style: {
					color: '#037f4c',
					addTaskColor: '#80bea4',
				},
				title: 'Day2',
				tasks: [
					{
						id: 't103',
						title: 'Im in group 2 right?',
						statusId: 'l103',
						priorityId: 'p103',
						people: [
							{
								_id: 'u102',
								fullName: 'Roy Boy',
								imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
							},
						],
						date: 1590999817436,
						checkbox: true,
						txt: '',
						link: 'http://airbnb.com',
						comments: [
							{
								id: 'Ty2nd',
								txt: 'I need some help please',
								createdAt: 1590999817436,
								byMember: {
									_id: 'u102',
									fullName: 'Roy Boy',
									imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
								},
							},
							{
								id: '12Dvg',
								txt: "I'll be with you in a moment",
								createdAt: 1590999817436.0,
								byMember: {
									_id: 'u101',
									fullName: 'Stan Smith',
									imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
								},
							},
						],
					},
				],
			},
		],
		activities: [
			{
				change: 'Changed Color',
				createdAt: 154514,
				byMember: {
					_id: 'u101',
					fullName: 'Stan Smith',
					imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
				},
				taskTitle: 'Im in group 2 right?',
			},
			{
				change: 'Changed task status',
				createdAt: 154514,
				byMember: {
					_id: 'u102',
					fullName: 'Roy Boy',
					imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/jrgo59ckddna2jol8i5l',
				},
				taskTitle: 'Add home page',
			},
		],
	},
]

const users = [
	{
		fullName: 'Anton Kandyba',
		userName: 'antonkandyba@gmail.com',
		password: 'superPassword',
		imgUrl: 'https://ca.slack-edge.com/T035GULFZRD-U03BURAF5QB-99b3505536a1-512',
		tasks: [
			{
				boardId: 'm101',
				groupId: 'g101',
				taskId: 't101',
			},
			{
				boardId: 'm101',
				groupId: 'g101',
				taskId: 't102',
			},
		],
	},
	{
		fullName: 'Almog Tzalach',
		userName: 'Almogtza@gmail.com',
		password: 'janeIsQueen',
		imgUrl: 'https://ca.slack-edge.com/T035GULFZRD-U036GA3BYU9-a713c54e93a1-512',
		tasks: [
			{
				boardId: 'm101',
				groupId: 'g102',
				taskId: 't101',
			},
		],
	},
	{
		fullName: 'Lior Abir',
		userName: 'liorabir909@gmail.com',
		password: 'janeIsQueen',
		imgUrl: 'https://ca.slack-edge.com/T035GULFZRD-U03A6LGN596-d32e73f742df-512',
		tasks: [
			{
				boardId: 'm101',
				groupId: 'g102',
				taskId: 't101',
			},
		],
	},
]

export const boardData = {
	boards,
	users,
}
