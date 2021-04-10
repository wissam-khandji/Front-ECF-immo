import React, { Component } from "react";
import Accueil from "../Acceuil/Accueil";
import Header from "../../UI/Header/Header";
import Login from "../Login/Login";
import EspaceLocataire from "../EspaceLocataire/EspaceLocataire";
import Footer from "../../Component/Footer/Footer";
import {Switch, Route} from "react-router-dom";

class site extends Component{
        render(){
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path="/espaceLocataire" exact render={() => <EspaceLocataire /> } />
                        <Route path="/login" exact render={() => <Login /> } />
                        <Route path="/contact" exact render={() => <h1>Contact</h1> } />
                        <Route path="/annonces" exact render={() => <h1>Annonces</h1>} />
                        <Route path="/"  exact render={() =><Accueil /> } />
                        <Route   exact render={() =><Accueil /> } />
                    </Switch>
                <Footer />    
            </div>
        );
    }
}

export default site;