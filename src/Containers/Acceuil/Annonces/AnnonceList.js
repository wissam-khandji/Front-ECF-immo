import React from "react"
import {connect} from "react-redux";
import {DataGrid} from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'Id', width: 70 },
  { field: 'titre', headerName: 'Titre', width: 200 },
  { field: 'description', headerName: 'Description', width: 400 },
  { field: 'loyer', headerName: 'Prix du loyer', width: 200 },
];

export function AnnonceList({annonces}){
    if(annonces){
     return(   
    <div style={{ marginTop:80, height: 500, width: '100%' }}>
        <DataGrid rows={annonces} columns={columns} pageSize={7} />
    </div>
     )}
    else{
        return <div>Loading...</div>
        }
    }    
    
const mapStateToProps = (state) => {return {annonces: state.data}};

export const AnnonceListStore = connect(mapStateToProps)(AnnonceList)