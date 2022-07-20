import { storageService } from "./storage-service"
const LOGGED_KEY = "loggedinUser"
const USER_KEY = "user"
_createUsers()
const gUsers = []

// BACKEND
// import { httpService } from "./http-service"
const ENDPOINT = "auth"

export const userService = {
	login,
	logout,
	signUp,
	getLoggedinUser,
	getById,
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
	const user = await storageService.get("user", userId)
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
		users = _getUsers()
		localStorage.setItem(USER_KEY, JSON.stringify(users))
	}
	gUsers = users
}
