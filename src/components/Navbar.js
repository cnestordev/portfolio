import React from 'react'

function Navbar() {
    return (
        <header className="navbarHeader">
            <nav className="navbarContainer">
                <div class="logoContainer">
                    <p class="LogoLetters">NC</p>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar