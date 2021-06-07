import React, { Component } from 'react'
import {Navbar,Nav,Dropdown,DropdownButton} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css";

export default class Navbars extends Component {
  state = {
    jumlah : 1
  }
  handlePlus = ()=>{
    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };
  handleMinus = ()=>{
    if (this.state.jumlah > 0) {
    this.setState({
      jumlah: this.state.jumlah - 1,
    });
  }
  };
  handleChange = () => {};

    render() {
        return (
            <div className="containerd">
                <Navbar bg="primary" expand="lg">
    <Link to="/">
         <Navbar.Brand>Buku</Navbar.Brand>
    </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <DropdownButton id="dropdown-basic-button" title="Login">
  <Dropdown.Item href="/login">Login</Dropdown.Item>
  <Dropdown.Item href="/signup">Sign Up</Dropdown.Item>
</DropdownButton>
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/koleksi">Koleksi Buku</Nav.Link>
    <Nav.Link className="shop-cart">
      <span>{this.state.jumlah}</span>
      <FontAwesomeIcon icon={faShoppingCart}/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.img} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>{this.props.harga}</Card.Text>
    <Button variant="danger" onClick={this.handleMinus}>-</Button>
    <input onChange={this.handleChange} type="text" value={this.state.jumlah} style={{width:"70%"}} className="text-center"/>
    <Button variant="primary" onClick={this.handlePlus}>+</Button>
  </Card.Body>
</Card> */}
            </div>
        )
    }
}
