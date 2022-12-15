import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");
export const deleteUser = createAction("DELETE_USER");

const initialState = {};

export default createReducer(initialState, {
    [setUser]: (state, action) =>{
     return action.payload
    },
    [deleteUser]: (state, action) =>{
     return initialState;
    },
})