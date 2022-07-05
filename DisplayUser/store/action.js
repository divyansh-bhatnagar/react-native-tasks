import {  GET_USER } from "./actionTypes";

import axios from "axios";

export const getUser = (page) => {
    return async (dispatch) => {
        try{
            console.log("getUser");
        const response = await axios.get(`https://reqres.in/api/users/?page=${page}`);
        console.log('response', response);
        const data = await response.data;
        if(data) {
            dispatch({
                type: GET_USER,
                payload: data,
            });
        }else{
            console.log("Unable to fetch data");
        }
    }catch(error){
        console.log(error);
    }
        
    }
}