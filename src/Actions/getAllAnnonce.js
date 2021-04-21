import axios from "axios";
import { SET_ANNONCES } from "../Store/Reducers/GlobalReducer";

export function getAllAnnonce() {
    return function(dispatch) {
      return axios.get("http://127.0.0.1:8000/api/annonces.json")
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