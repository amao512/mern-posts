import { GET_FILES, DELETE_FILE, UPLOAD_IMAGE } from "../constants";

export const getFiles = files => ({ type: GET_FILES, payload: files })
export const uploadImage = file => ({ type: UPLOAD_IMAGE, payload: file })
export const deleteFile = file => ({ type: DELETE_FILE, payload: file })