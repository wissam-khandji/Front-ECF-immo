import React from "react"; 

const Dropdown = (props) => {
     let btnDpDwnCss = `btn ${props.typeDpDwn} dropdown-toggle`
    return (
    <div className="dropdown">
        <a className={btnDpDwnCss} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
         {props.children}
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a className="dropdown-item" href="#">Prix croissant</a></li>
            <li><a className="dropdown-item" href="#">Prix decroissant</a></li>
            <li><a className="dropdown-item" href="#">Nouveautés</a></li>
        </ul>
    </div>
    ) 
    
};

export default Dropdown;