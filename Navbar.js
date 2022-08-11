import React, { Component } from "react";
import { MenueItems } from "./MenueItems"
import './Navbar.css'

class Navbar extends Component{
    state = { clicked : false }

    handleClick = () => {
        this.setState({ clicked:!this.state.clicked})
    } 



    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="nav-bar-logo">React <i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul>
                    {MenueItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )

                    })}
               
                </ul>
                
            </nav> 
        )
    }
}

export default Navbar
