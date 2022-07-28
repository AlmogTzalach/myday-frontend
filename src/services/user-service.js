import { storageService } from './storage-service'
import { boardData } from './board'
const LOGGED_KEY = 'loggedInUser'
const USER_KEY = 'userDB'
// const gUsers = _createUsers()

// BACKEND
import { httpService } from './http-service'
const ENDPOINT = 'auth'

export const userService = {
	query,
	login,
	logout,
	signUp,
	getLoggedInUser,
	getById,
}

async function query() {
	// return storageService.query(USER_KEY)
	const users = await httpService.get('user')
	return users
}

async function login(credentials) {
	const user = await httpService.post(`${ENDPOINT}/login`, credentials)
	return _saveLocalUser(user)
}

async function logout() {
	sessionStorage.removeItem(LOGGED_KEY)
	return await httpService.post(`${ENDPOINT}/logout`)
}

async function signUp(signupInfo) {
	const user = await httpService.post(`${ENDPOINT}/signup`, signupInfo)
	console.log(user)
	return _saveLocalUser(user)
}

async function getById(userId) {
	const user = await httpService.get('user', userId)
	return user
}

function getLoggedInUser() {
	var user = sessionStorage.getItem(LOGGED_KEY)
	return JSON.parse(user)
}

function _saveLocalUser(user) {
	sessionStorage.setItem(LOGGED_KEY, JSON.stringify(user))
	return user
}

// function _createUsers() {
// 	let users = JSON.parse(localStorage.getItem(USER_KEY))
// 	if (!users || !users.length) {
// 		users = boardData.users
// 		localStorage.setItem(USER_KEY, JSON.stringify(users))
// 	}
// 	return users
// }
