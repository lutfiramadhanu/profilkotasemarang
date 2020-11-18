import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Pemerintah extends Component{
    render(){
        return(
            <div align="center">
                 <Mui.Button variant="contained">< a href="/">HOME</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pariwisata">PARIWISATA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kuliner">KULINER</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pemerintah">PEMERINTAH</a></Mui.Button>
        
                <h1>PEMERINTAH KOTA SEMARANG</h1>
                <h3>Hendrar Prihadi, S.E., M.M</h3>
                <p>(lahir di Semarang, Jawa Tengah, 30 Maret 1971; umur 49 tahun) adalah Wali Kota Semarang yang menjabat sejak 17 Februari 2016. Sebelumnya, ia pernah menjabat sebagai Wali Kota Semarang periode 2013-2015 dan Wakil Wali Kota periode 2010-2013. </p>
            </div>
        )
    }
}
export default Pemerintah;