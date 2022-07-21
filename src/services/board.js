const boards = [
	{
		_id: 'b101',
		title: 'Sprint July 2022',
		createdAt: 1589983468418,
		createdBy: {
			_id: 'u101',
			fullName: 'Stan Smith',
			imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
		},
		cmpsOrder: ['status', 'person', 'date'],
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
				imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
			},
			{
				_id: 'u102',
				fullName: 'Jane Doe',
				imgUrl: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
			},
		],
		groups: [
			{
				id: 'g101',
				title: 'Group 1',
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
								imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
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
									imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
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
								imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
							},
							{
								_id: 'u102',
								fullName: 'Jane Doe',
								imgUrl: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
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
									fullName: 'Jane Doe',
									imgUrl: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
								},
							},
						],
					},
				],
			},
			{
				id: 'g102',
				title: 'Group 2',
				tasks: [
					{
						id: 't103',
						title: 'Im in group 2 right?',
						statusId: 'l103',
						priorityId: 'p103',
						people: [
							{
								_id: 'u102',
								fullName: 'Jane Doe',
								imgUrl: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
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
									fullName: 'Jane Doe',
									imgUrl: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
								},
							},
							{
								id: '12Dvg',
								txt: "I'll be with you in a moment",
								createdAt: 1590999817436.0,
								byMember: {
									_id: 'u101',
									fullName: 'Stan Smith',
									imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
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
					imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
				},
				taskTitle: 'Im in group 2 right?',
			},
			{
				change: 'Changed task status',
				createdAt: 154514,
				byMember: {
					_id: 'u102',
					fullName: 'Jane Doe',
					imgUrl: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
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
			imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
		},
		cmpsOrder: ['status', 'person', 'date'],
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
				imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
			},
			{
				_id: 'u102',
				fullName: 'Jane Doe',
				imgUrl: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
			},
		],
		groups: [
			{
				id: 'g101',
				title: 'Day1',
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
								imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
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
									imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
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
								imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
							},
							{
								_id: 'u102',
								fullName: 'Jane Doe',
								imgUrl: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
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
									fullName: 'Jane Doe',
									imgUrl: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
								},
							},
						],
					},
				],
			},
			{
				id: 'g102',
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
								fullName: 'Jane Doe',
								imgUrl: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
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
									fullName: 'Jane Doe',
									imgUrl: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
								},
							},
							{
								id: '12Dvg',
								txt: "I'll be with you in a moment",
								createdAt: 1590999817436.0,
								byMember: {
									_id: 'u101',
									fullName: 'Stan Smith',
									imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
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
					imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
				},
				taskTitle: 'Im in group 2 right?',
			},
			{
				change: 'Changed task status',
				createdAt: 154514,
				byMember: {
					_id: 'u102',
					fullName: 'Jane Doe',
					imgUrl: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
				},
				taskTitle: 'Add home page',
			},
		],
	},
]

const users = [
	{
		_id: 'u101',
		fullName: 'Stan Smith',
		userName: 'stantheman@jmail.com',
		password: 'superPassword',
		imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
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
		_id: 'u102',
		fullName: 'Jane Doe',
		userName: 'janedoe@jmail.com',
		password: 'janeIsQueen',
		imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg',
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
