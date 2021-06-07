import React, { Component } from 'react'
import {Card,Button, Container} from 'react-bootstrap'
import axios from 'axios'
import Navbars from '../components/navbar/Navbars';
export default class BookDescription extends Component {
    state ={
        books:[],
        jumlah : 1,
    };
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

    componentDidMount(){
        let id = this.props.match.params.id;
        console.log(id);
        axios.get("https://bukuprojek.herokuapp.com/buku/"+ id).then((res)=>{
            console.log(res.data.data);
            this.setState({
                books: res.data.data,
            });
        });
    }
    render() {
        const {books} = this.state;
        return (
            <div>
                <Navbars/>
                <Container>
                <Card> 
  <Card.Body>
    <Card.Title>{books.nama}</Card.Title>
    <Card.Text>Harga Rp.{books.harga}</Card.Text>
    <Card.Text>Tahun :{books.tahun}</Card.Text>
    <Button variant="danger" onClick={this.handleMinus}>-</Button>
    <input onChange={this.handleChange} type="text" value={this.state.jumlah} style={{width:"50%"}} className="text-center"/>
    <Button variant="primary" onClick={this.handlePlus}>+</Button>
  </Card.Body>
</Card>
</Container>
            </div>
        )
    }
}
