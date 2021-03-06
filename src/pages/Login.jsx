import React, { Component } from 'react'
import {Form,Button,Container} from 'react-bootstrap'
import Navbars from "../components/navbar/Navbars";
import './custom.css'

export default class Login extends Component {
    render() {
        return (
            <div>
            <Navbars/>
            <Container>
            <h1 className="customText">LOGIN</h1>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
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
