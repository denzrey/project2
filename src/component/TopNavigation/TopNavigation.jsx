import React, { Component, Fragment} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import blackLogo from "../../asset/css/image/logo_black.png";
import whiteLogo from "../../asset/css/image/logo_white.png";



export class TopNavigation extends Component {

    constructor(){
        super();
        this.state={
            navBarTitle:'navTitle',
            navBarLogo:[whiteLogo],//Object
            navBarBack:'navBackground',
            navBarItem:'navItem'
        }
    }

onScroll =()=>{
    if(window.scrollY>50){
        this.setState({navBarTitle:'navTitleScroll',navBarLogo:[blackLogo],navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll'})
        
    }else if (window.scrollY<50){
        this.setState({navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBarBack:'navBackground',navBarItem:'navItem'})
       
    }
}

    componentDidMount(){
        window.addEventListener('scroll',this.onScroll)
    }

  render() {
    return (
      <Fragment>

<Navbar className={this.state.navBarBack} collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className={this.state.navBarTitle}> CFX LEARNING <br />
        <img src={this.state.navBarLogo} alt="navbarlogo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav >
            <Nav.Link href="#deets" className={this.state.navBarItem}>Home |</Nav.Link>
            <Nav.Link href="#deets" className={this.state.navBarItem}>About |</Nav.Link>
            <Nav.Link href="#deets" className={this.state.navBarItem}>Service |</Nav.Link>
            <Nav.Link href="#deets" className={this.state.navBarItem}>Courses |</Nav.Link>
            <Nav.Link href="#deets" className={this.state.navBarItem}>Portfolio |</Nav.Link>
            <Nav.Link href="#deets" className={this.state.navBarItem}>Contact Us |</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </Fragment>
    )
  }
}

export default TopNavigation