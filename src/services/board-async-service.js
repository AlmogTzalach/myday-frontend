// import { storageService } from './storage-service'
import utilService from './util-service'
// import { boardData } from './board'

const BOARD_KEY = 'boardDB'
const groupsClrs = [
	'#037f4c',
	'#00c875',
	'#cab641',
	'#ffcb00',
	'#784bd1',
	'#a25ddc',
	'#0086c0',
	'#579bfc',
	'#66ccff',
	'#bb3354',
	'#ff158a',
	'#ff642e',
]
const addTaskClrs = [
	'#80bea4',
	'#7ee3b9',
	'#e4da9f',
	'#ffe47e',
	'#baa4e7',
	'#d0aded',
	'#7ec2df',
	'#aaccfd',
	'#b1e5ff',
	'#dc98a8',
	'#ff89c4',
	'#ffb095',
]

// _createBoards()

//BACKEND
import { httpService } from './http-service'
const ENDPOINT = 'board'

export const boardService = {
	query,
	getById,
	remove,
	save,
	getEmptyTask,
	getEmptyGroup,
	getRandomGroupClr,
	getEmptyLabel,
	getEmptyBoard,
	getEmptyComment,
}

async function query() {
	// return storageService.query(BOARD_KEY)
	return await httpService.get(ENDPOINT)
}

async function getById(boardId) {
	// return storageService.get(BOARD_KEY, boardId)
	const board = await httpService.get(`${ENDPOINT}/${boardId}`)
	return board
}

async function remove(boardId) {
	// return storageService.remove(BOARD_KEY, boardId)
	return await httpService.delete(`${ENDPOINT}/${boardId}`)
}

async function save(board) {
	// if (board._id) return storageService.put(BOARD_KEY, board)
	// return storageService.post(BOARD_KEY, board)

	if (board._id) {
		return await httpService.put(`${ENDPOINT}/${board._id}`, board)
	} else {
		return await httpService.post(ENDPOINT, board)
	}
}

function getEmptyComment(txt, loggedUser) {
	return {
		id: utilService._makeId(),
		txt,
		createdAt: Date.now(),
		byMember: loggedUser,
	}
}

function getEmptyGroup() {
	return {
		id: utilService._makeId(),
		title: 'New Group',
		style: {
			color: '#0086c0',
		},
		tasks: [],
	}
}

function getEmptyTask() {
	return {
		id: utilService._makeId(5),
		title: 'New Task',
		statusId: 'l101',
		priorityId: 'p101',
		people: [],
		date: 1590999817436,
		checkbox: true,
		txt: '',
		link: '',
		comments: [],
	}
}

function getEmptyLabel() {
	return {
		id: utilService._makeId(5),
		title: '',
		color: utilService.generateDarkColor(),
	}
}

function _createBoards() {
	let boards = JSON.parse(localStorage.getItem(BOARD_KEY))
	if (!boards || !boards.length) {
		boards = boardData.boards
		localStorage.setItem(BOARD_KEY, JSON.stringify(boards))
	}
	return boards
}

function getRandomGroupClr() {
	const num = utilService.getRandomIntInclusive(0, groupsClrs.length - 1)
	const style = {
		color: groupsClrs[num],
		addTaskColor: addTaskClrs[num],
	}
	return style
}

function getEmptyBoard() {
	return {
		title: 'Add title',
		createdAt: Date.now(),
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
		groupsOrder: ['g104', 'g105'],
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
				_id: 'u102',
				fullName: 'bill',
				imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
			},
		],
		groups: [
			{
				id: 'g104',
				title: 'Group title',
				style: {
					color: '#0086c0',
					addTaskColor: '#7ec2df',
				},
				tasks: [
					{
						id: utilService._makeId(),
						title: 'Item 1',
						statusId: 'l101',
						priorityId: 'p101',
						people: [
							{
								_id: 'u102',
								fullName: 'bill',
								imgUrl: 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png',
							},
						],
						date: Date.now(),
						checkbox: true,
						txt: 'Add text',
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
						id: utilService._makeId(),
						title: 'Item 2',
						statusId: 'l101',
						priorityId: 'p101',
						people: [],
						date: Date.now(),
						checkbox: false,
						txt: 'Add text',
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
						id: utilService._makeId(),
						title: 'Item 3',
						statusId: 'l101',
						priorityId: 'p101',
						people: [],
						date: Date.now(),
						checkbox: false,
						txt: 'Add text',
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
				],
			},
			{
				id: 'g105',
				style: {
					color: '#037f4c',
					addTaskColor: '#80bea4',
				},
				title: 'Group Title',
				tasks: [
					{
						id: utilService._makeId(),
						title: 'Item 4',
						statusId: 'l103',
						priorityId: 'p103',
						people: [],
						date: Date.now(),
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
						id: utilService._makeId(),
						title: 'Item 5',
						statusId: 'l103',
						priorityId: 'p103',
						people: [],
						date: Date.now(),
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
	}
}
