import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './barnav.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap'

class BarNav extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="wrapper">
                <Navbar color="light" light expand="md">
                    <NavbarBrand id ="nav-title" href="/">Watson Personality Analyzer</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            </NavItem>
                            <NavItem>
                                <Link className ="p-2 navlink" to='/main'>Analyzer</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="p-2 navlink" to='/about'>About</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default BarNav