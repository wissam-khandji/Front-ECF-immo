import axios from "axios";
import { SET_ANNONCES } from "../Store/Reducers/GlobalReducer";

export function getAllAnnonce() {
    return function(dispatch) {
      return axios.get("https://salty-hamlet-11877.herokuapp.com/api/annonces.json")
       .then(({ data }) => {
          dispatch(setAllAnnonces(data));
          console.log(data);
      });
    };

    function setAllAnnonces(data) {
        return {
          type: SET_ANNONCES,
          payload: data
        };
      }

 }