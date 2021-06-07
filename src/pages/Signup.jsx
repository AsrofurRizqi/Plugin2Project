import React, { Component } from 'react'
import {Form,Button,Container} from 'react-bootstrap'
import Navbars from "../components/navbar/Navbars";
import './custom.css'

export default class Signup extends Component {
    render() {
        return (
            <div>
            <Navbars/>
            <Container>
            <h1 className="customText">SIGN UP</h1>
            <Form>
            <Form.Group controlId="formBasicNama">
    <Form.Label>Nama</Form.Label>
    <Form.Control type="nama" placeholder="Enter Nama" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPhone">
    <Form.Label>Nomer Hp</Form.Label>
    <Form.Control type="nomerhp" placeholder="Nomer Hp" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I Agree" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
            </div>
        )
    }
}
