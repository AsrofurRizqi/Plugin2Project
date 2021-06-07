import React, { Component } from 'react'
import Navbars from '../components/navbar/Navbars';
import {Table,Container} from 'react-bootstrap'
import axios from 'axios'

export default class koleksi extends Component {
    state ={
        books:[],
    };
    componentDidMount(){
        axios.get("https://bukuprojek.herokuapp.com/buku").then((res)=>{
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
             <Table striped bordered hover size="sm">
  <thead>
    <tr className="customTable">
      <th>Nama</th>
      <th>Harga</th>
      <th>Tahun</th>
    </tr>
  </thead>
  <tbody>
             {books.map((book,index)=>{return(
    <tr className="customTable">
      <td>{book.nama}</td>
      <td>Rp.{book.harga}</td>
      <td>{book.tahun}</td>
    </tr>
)})}
  </tbody>
</Table>
</Container>
            </div>
        )
    }
}
