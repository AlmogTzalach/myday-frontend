export default {
	_makeId,
	getRandomIntInclusive,
	generateDarkColor,
}

function _makeId(length = 8) {
	var text = ''
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length))
	}
	return text
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
}

function generateDarkColor() {
	let color = '#'
	for (let i = 0; i < 3; i++)
		color += (
			'0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
		).slice(-2)
	return color
}
