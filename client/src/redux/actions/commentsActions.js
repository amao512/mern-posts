import { GET_COMMENTS, ADD_COMMENT } from "../constants";

export const getComments = comments => ({ type: GET_COMMENTS, payload: comments })
export const addComment = comment => ({ type: ADD_COMMENT, payload: comment })