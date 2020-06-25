import { GET_LIKES, GET_DISLIKES } from "../constants";

export const getLikes = likes => ({ type: GET_LIKES, payload: likes })
export const getDislikes = dislikes => ({ type: GET_DISLIKES, payload: dislikes })