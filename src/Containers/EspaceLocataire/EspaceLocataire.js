import React, { Component } from "react";

class EspaceLocataire extends Component{
        render(){
        return(
            <div>
                <div className="container-fluid">

                </div>
                <div className="container-fluid">
                    <div className="container border border-secondary mt-3">
                        <div className="row justify-content-around text-center">
                            <div className="col-md-3">
                                <h3>Mon loyer :</h3>
                            </div>
                            <div className="col-md-1">
                                <h3>img :</h3>
                            </div>
                            <div className="col-md-3">
                                <h3>Adresse de facturation :</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-around align-items-center text-center">
                        <div className="col-md-3 mt-3">
                            <table class="table table-bordered border-secondary">
                                <thead>
                                    <tr>
                                    <th scope="col">Mes messages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>This is a messages</td>
                                    </tr>
                                </tbody>
                                </table>

                                <table class="table table-bordered border-secondary">
                                <thead>
                                    <tr>
                                    <th scope="col">Mes echéances</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>This is a echeance</td>
                                    </tr>
                                </tbody>
                                </table>
                        </div>

                        <div className="col-md-3">
                            <button className="btn btn-outline-primary rounded-pill my-3 px-5">Declarer un probleme</button> <br/>
                            <button className="btn btn-outline-info rounded-pill my-3 px-5">Demande de travaux</button> <br/>
                            <button className="btn btn-outline-success rounded-pill my-3 px-5">Mes documents</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default EspaceLocataire;