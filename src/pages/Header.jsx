import React from 'react'
import logo from './../images/logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Dropdown from './dropdown';
import '../header.css'
import Options from './optiondropdown';


function eventHandler(e){
    var data = e.target.value;
    var val = e.target.value.split(" ")
    var length = val.length;
    if(document.getElementById(data)){
        window.location.href = `/Details/${val[length-1].toUpperCase()} ${val[0]}`;
    }
}

function Header() {
    return (
        <header className="header bg-dark">
            <div className='heading navbar-brand'>
                <img src={logo} alt="logo" />
                <h1>CryptoMarketStat</h1>
            </div>
            <div className="searchcontainer">
                {/* <FontAwesomeIcon icon={faMagnifyingGlass} className="searchicon"  onClick={searchhandler}/> */}
                    <Options />
                    <Dropdown />

            </div>
        </header>
    );
}

export default Header;