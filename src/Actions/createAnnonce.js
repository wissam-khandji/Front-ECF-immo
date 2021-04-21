import axios from "axios";
import { ADD_ANNONCE } from "../Store/Reducers/GlobalReducer";

export function createAnnonce(annonce) {
    return function(dispatch) {
      return axios.post("http://127.0.0.1:8000/api/annonces.json", annonce)
       .then(({ data }) => {
        console.log(data);
        dispatch(addAnnonce(data));
      });
    };

    function addAnnonce(data) {
        return {
          type: ADD_ANNONCE,
          payload: data
        };
      }

 }