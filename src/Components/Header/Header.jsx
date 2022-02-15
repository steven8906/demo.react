import React from "react";
import { LOGO } from "../../Config/Constants"
import "./Header.css"

export default function Header({props}){
    return(
        <header className="App-header" style={{height: props.headerHeight ?? "50vh", transition:".3s"}}>
            <img src={ LOGO } className="App-logo" style={{height: props.logoHeight ?? "30vh", transition:".3s"}} alt="logo" />
            <h1 className={"text-dark"}>Git Profiles</h1>
        </header>
    );
}