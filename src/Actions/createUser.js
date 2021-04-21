import axios from "axios";
import { ADD_USER } from "../Store/Reducers/GlobalReducer";

export function createUser(user) {
    return function(dispatch) {
      return axios.post("http://127.0.0.1:8000/api/proprietaires.json", user)
       .then(({ data }) => {
        console.log(data);
        dispatch(addUser(data));
      });
    };

    function addUser(data) {
        return {
          type: ADD_USER,
          payload: data
        };
      }

 }