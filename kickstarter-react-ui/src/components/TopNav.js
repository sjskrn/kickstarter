import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavItem, Image, Button, Modal} from 'react-bootstrap'
import LogoutModal from './LogoutModal'




class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    isToggleOn: false,
    }
    if (props.location && props.location.state) {
      this.state.user = this.props.location.state.user
    }

    }

    handleLogoutClick = () => {
      this.setState({
        isToggleOn: !this.state.isToggleOn
      });
    }

    handleLogout = () => {
      fetch(`http://localhost:3000/sessions/${this.props.user.id}`,
      { method: 'DELETE' }).then(response => response.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
      };

    componentWillMount() {

        this.setState({isToggleOn: false})

    }


render() {
  this.state ? console.log("HERE IS THE STATE", this.props) : console.log("MAJOR ISSUE")

  return(

  <Navbar collapseOnSelect>
        <Navbar.Header>
        <Navbar.Brand>
        <Link to='/'>  Demo88  </Link>
        </Navbar.Brand>
        </Navbar.Header>

        <Nav>
        <NavItem eventKey={1}>
        <Link to='/demos'>Explore Demos</Link>
        </NavItem>
        <NavItem eventKey={2}>
        <Link to='/demos/new'>Create A Demo</Link>
        </NavItem>
        </Nav>

        <Nav pullRight>
        <NavItem className="navbar-right" eventKey={2}>
        <Link to="/signup">Signup</Link>
        </NavItem>

        <NavItem className="navbar-right" eventKey={2}>
        <Button onClick={this.handleLogoutClick}>Logout</Button>
        </NavItem>

        <NavItem className="navbar-right" eventKey={1}>
        <Link to="/login">Login</Link>
        </NavItem>

        <LogoutModal show={this.state.isToggleOn} onClose={this.handleLogoutClick}
        onSave={this.handleLogout}/>

        </Nav>

  </Navbar>
        )
      }
    }

export default TopNav
