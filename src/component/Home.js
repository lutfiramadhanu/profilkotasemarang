import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Home extends Component{
    render(){
        return(
            <div align="center">
                 <Mui.Button variant="contained">< a href="/">HOME</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pariwisata">PARIWISATA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kuliner">KULINER</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pemerintah">PEMERINTAH</a></Mui.Button>
                <hr></hr>
                <h1>KOTA SEMARANG</h1>
                <hr></hr>
                <img src="/tm.jpg" width="1100" height="500"/>
                <hr></hr>
                <h1>Tugu Muda</h1>
                <hr></hr>
            </div>
        )
    }
}
export default Home;