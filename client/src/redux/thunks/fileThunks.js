import { FilesAPI } from "../../api"
import { getFiles, deleteFile, uploadImage } from "../actions/fileActions"

export const getFilesThunk = () => async dispatch => {
    const data = await FilesAPI.getFiles()

    return dispatch(getFiles(data))
}

// Upload image PUT /api/auth/uploadImg
export const uploadImgThunk = (img, token) => async dispatch => {
    const data = await FilesAPI.uploadImage(img, token)
    
    return dispatch(uploadImage(data))
}


export const deleteFileThunk = (id, token) => async dispatch => {
    await FilesAPI.deleteFile(id, token)

    return dispatch(deleteFile(id))
}