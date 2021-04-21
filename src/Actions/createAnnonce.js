import axios from "axios";
import { ADD_ANNONCE } from "../Store/Reducers/GlobalReducer";

export function createAnnonce(annonce) {
    return function(dispatch) {
      return axios.post("https://salty-hamlet-11877.herokuapp.com/api/annonces.json", annonce)
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