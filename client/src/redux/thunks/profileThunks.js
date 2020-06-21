import { ProfileAPI } from "../../api"
import { uploadImage, getProfileData } from "../actions/profileActions"
import { setAuthError } from "../actions/authActions"

// Get profile data GET /api/auth/
export const getProfileDataThunk = () => async dispatch => {
    const storageData = await JSON.parse(localStorage.getItem('userData'))
    const data = await ProfileAPI.getProfile(storageData && storageData.token)

    if(data && data.message){
        return dispatch(setAuthError(data.message))
    }

    return dispatch(getProfileData(data))
   
}
