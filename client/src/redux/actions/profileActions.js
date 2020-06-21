import { GET_PROFILE_DATA } from "../constants";

export const getProfileData = profile => ({ type: GET_PROFILE_DATA, payload: profile })