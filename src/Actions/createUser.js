import axios from "axios";
import { ADD_USER } from "../Store/Reducers/GlobalReducer";

export function createUser(user) {
    return function(dispatch) {
      return axios.post("https://shielded-falls-05334.herokuapp.com/api/proprietaires.json", user)
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