import React, { Component } from "react";

class AnnonceList extends Component{
        render(){
        return(
            <div className="hauteur container-fluid border border-bottom boder-secopndary">
                <div className="row justify-content-between align-items-center">
                    <div className="col-4">
                        <h1 className="m-3">Image</h1>
                    </div>

                    <div className="col-8">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-5">
                                <h2 className="m-3">Titre</h2>
                                <p className="m-3">Description</p>
                            </div>

                            <div className="col-md-5">
                                <p className="m-3">Prix</p>
                            </div>

                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default AnnonceList;