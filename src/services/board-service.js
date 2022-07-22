import { storageService } from './storage-service'
import utilService from './util-service'
import { boardData } from './board'

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

_createBoards()

//BACKEND
// import { httpService } from "./http-service"
// const ENDPOINT = "board"

export const boardService = {
	query,
	getById,
	remove,
	save,
	getEmptyTask,
	getEmptyGroup,
	getRandomGroupClr,
}

async function query() {
	return storageService.query(BOARD_KEY)
	// return await httpService.get(ENDPOINT)
}

async function getById(boardId) {
	return storageService.get(BOARD_KEY, boardId)
	// const board = await httpService.get(`${ENDPOINT}/${boardId}`)
	// return board
}

async function remove(boardId) {
	return storageService.remove(BOARD_KEY, boardId)
	// return await httpService.delete(`${ENDPOINT}/${boardId}`)
}

async function save(board) {
	if (board._id) return storageService.put(BOARD_KEY, board)
	return storageService.post(BOARD_KEY, board)

	//   if (board._id) {
	//     return await httpService.put(`${ENDPOINT}/${board._id}`, board);
	//   } else {
	//     return await httpService.post(ENDPOINT, board);
	//   }
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
	const groupClr = groupsClrs[num]
	return groupClr
}
