import { storageService } from './storage-service'
import { boardData } from './board'
const LOGGED_KEY = 'loggedinUser'
const USER_KEY = 'userDB'
const gUsers = _createUsers()

// BACKEND
// import { httpService } from "./http-service"
// const ENDPOINT = "auth"

export const userService = {
	query,
	login,
	logout,
	signUp,
	getLoggedinUser,
	getById,
}

async function query() {
	return storageService.query(USER_KEY)
	//   const user = await httpService.post(`${ENDPOINT}/login`, credentials);
	//   return _saveLocalUser(user);
}

async function login(credentials) {
	//   const user = await httpService.post(`${ENDPOINT}/login`, credentials);
	//   return _saveLocalUser(user);
}

async function logout() {
	sessionStorage.removeItem(STORAGE_KEY)
	//   return await httpService.post(`${ENDPOINT}/logout`);
}

async function signUp(signupInfo) {
	// const user = await httpService.post(`${ENDPOINT}/signup`, signupInfo)
	// return _saveLocalUser(user)
}

async function getById(userId) {
	const user = await storageService.get('user', userId)
	return user
}

function getLoggedinUser() {
	var user = sessionStorage.getItem(STORAGE_KEY)
	return JSON.parse(user)
}

function _saveLocalUser(user) {
	sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
	return user
}

function _createUsers() {
	let users = JSON.parse(localStorage.getItem(USER_KEY))
	if (!users || !users.length) {
		users = boardData.users
		localStorage.setItem(USER_KEY, JSON.stringify(users))
	}
	return users
}
