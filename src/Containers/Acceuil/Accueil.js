import React, { Component } from "react";
import Filter from "../../Component/FilterAcceuil/Filter/Filter";
import AnnonceList from "./AnnonceList/AnnonceList";

class Acceuil extends Component{
        render(){
        return(
            <>
                <Filter />
                <AnnonceList />
                <AnnonceList />
                <AnnonceList />
                
            </>
        );
    }
}

export default Acceuil;