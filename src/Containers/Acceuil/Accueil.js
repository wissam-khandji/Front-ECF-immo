import React, { Component } from "react";
import { AnnonceListStore } from "./Annonces/AnnonceList";

class Acceuil extends Component{
        render(){
        return(
            <>
                    <AnnonceListStore />          

            </>
        );
    }
}

export default Acceuil;