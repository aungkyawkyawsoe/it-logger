import {GET_TECHS, ADD_TECH, TECHS_ERROR, DELETE_TECH, SET_LOADING, GET_LOGS, LOGS_ERROR} from "./types";


// Get techs from server
export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e.response.statusText
        });
    }
};

// Add Technician to server
export const addTech = tech => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs',{
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e.response.statusText
        });
    }
};

// Delete tech to server
export const deleteTech = id => async dispatch => {
    try {
        setLoading();

        await fetch(`/techs/${id}`,{
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e.response.statusText
        });
    }
};

// Set loading to true
export const setLoading = () => {
   return {
       type: SET_LOADING
   }
};