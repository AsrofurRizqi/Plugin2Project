import React, { Component } from 'react'
import {Card, Button, CardDeck} from 'react-bootstrap'
import axios from 'axios'
export default class Product extends Component {
    state = {
        foods: [],
    };

    componentDidMount(){
        axios.get("https://bukuprojek.herokuapp.com/buku").then((res) =>{
            console.log(res.data.data);
        })
    }
    render() {
        return (
            <div>
<Container>
<CardDeck>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.img} />
  <Card.Body>
    <Card.Title>{this.props.nama}</Card.Title>
    <Card.Text>{this.props.harga}</Card.Text>
    <Card.Text>{this.props.tahun}</Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</CardDeck>
</Container>
            </div>
        )
    }
}
