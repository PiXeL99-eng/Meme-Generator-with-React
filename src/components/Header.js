import troll from "../images/troll_face.jpg"
import React from "react"

export default function Header(){
    return (
        <header className="header">
            <img src={troll} alt="Not found" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React - Course Project 3</h4>
        </header>
    )
}