import React from "react"; 
import Dropdown from "../DropdownBtn/Dropdown";

const Filter = (props) => (
    <div className="container-fluid">
                <div className="row justify-content-center align-items-center text-center bg-light border border-secondary">
                    <div className="col-md-4 m-3">
                        <Dropdown typeDpDwn='btn-success'>Trier par </Dropdown>
                    </div>
                    <div className="col-md-4 m-3">
                        <Dropdown typeDpDwn='btn-warning'>Filtre</Dropdown>
                    </div>

                </div>
            </div>
);

export default Filter;