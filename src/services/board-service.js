import { storageService } from "./storage-service"
const BOARD_KEY = "boardDB"
_createBoards()

//BACKEND
// import { httpService } from "./http-service"
// const ENDPOINT = "board"

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
};

async function query() {
  return storageService.query(BOARD_KEY);
  // return await httpService.get(ENDPOINT)
}

async function getById(boardId) {
  return storageService.get(TOY_KEY, boardId);
  // const board = await httpService.get(`${ENDPOINT}/${boardId}`)
  // return board
}

async function remove(boardId) {
  return storageService.remove(BOARD_KEY, boardId);
  // return await httpService.delete(`${ENDPOINT}/${boardId}`)
}

async function save(board) {
  if (board._id) return storageService.put(BOARD_KEY, board);
  return storageService.post(BOARD_KEY, board);

//   if (board._id) {
//     return await httpService.put(`${ENDPOINT}/${board._id}`, board);
//   } else {
//     return await httpService.post(ENDPOINT, board);
//   }
}

function getEmptyToy() {
  return {
    _id: "",
    name: "",
    price: "",
    labels: [],
    createdAt: "",
    inStock: true,
    img: "",
  };
}

function _createBords() {
  let boards = JSON.parse(localStorage.getItem(BOARD_KEY));
  if (!boards || !boards.length) {
    boards = _get();
    localStorage.setItem(BOARD_KEY, JSON.stringify(boards));
  }
  return boards
}