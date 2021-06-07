import React, { Component } from 'react'
import Navbars from "../components/navbar/Navbars";
import Carousel from "../components/carousel/Carousels";
import {Card,Button,CardColumns, Container} from 'react-bootstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'
import "./custom.css"

export default class Home extends Component {
    // state = {
    //     showComponents: true,
    // }
    state ={
        books:[],
    };
    componentDidMount(){
       axios.get("https://bukuprojek.herokuapp.com/buku").then((res)=>{
            console.log(res.data.data)
            this.setState({
            books:(res.data.data)
        })
        });
    }
    // componentDidMount() {
    //     setTimeout(()=> {
    //         this.setState({
    //         showComponents : false,
    //     });
    //    }, 8000);
    // }
    render() {
        const {books} = this.state;
        return (
            <div>
            <Navbars link="/koleksi"/>
            <Carousel/>
            
<Container>
<CardColumns>
{books.map((book,index)=>{return(
<Card className="customCard" key={index}>
  <Card.Img variant="top" src={this.props.img} />
  <Card.Body>
    <Card.Title>{book.nama}</Card.Title>
    <Card.Text>Harga :Rp.{book.harga}</Card.Text>
    <Card.Text>Tahun :{book.tahun}</Card.Text>
    <Link to={`/detail/${book.id}`}>
    <Button variant="primary">Detail</Button>
    </Link>
  </Card.Body>
</Card>
)})}
</CardColumns>
</Container>
            </div>
        )
    }
}
