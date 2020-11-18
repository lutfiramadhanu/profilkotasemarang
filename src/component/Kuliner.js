import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Kuliner extends Component{
    render(){
        return(
            <div align="center">
                 <Mui.Button variant="contained">< a href="/">HOME</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pariwisata">PARIWISATA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kuliner">KULINER</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Pemerintah">PEMERINTAH</a></Mui.Button>
                <hr></hr>
              <Carousel>
                  <img src="/klepon.jpg" width="1300" height="700"/> 
                  <img src="/lumpia.jpg" width="1300" height="700"/>
                  <img src="/soto-kudus.jpeg" width="1300" height="700"/>
              </Carousel>
              <hr></hr>
              <h1>Kelepon</h1>
              <p>Meskipun populer di seluruh Asia Tenggara, klepon mungkin berasal dari Jawa. Hidangan ini juga disebut sebagai klepon di Belanda. Pada 1950-an, klepon diperkenalkan oleh imigran Indo ke Belanda dan sudah tersedia di toko-toko toko, restoran Belanda dan Cina Indonesia dan supermarket di seluruh negeri
              <hr></hr>
              <h1>Lumpia</h1>
              <p>Lunpiyah) adalah makanan semacam rollade yang berisi rebung, telur, dan daging ayam atau udang. Cita rasa lumpia semarang adalah perpaduan rasa antara Tionghoa dan Indonesia karena pertama kali dibuat oleh seorang keturunan Tionghoa yang menikah dengan orang Indonesia dan menetap di Semarang, Jawa Tengah.</p>
              <hr></hr>
              <h1>Soto Kudus</h1>
              <p>Soto kudus (Hanacaraka:ꦱꦺꦴꦠꦺꦴ​ꦏꦸꦢꦸꦱ꧀) adalah soto yang berasal dari Kudus. Soto kudus, hampir mirip dengan soto Lamongan, soto kudus berisi suwiran ayam dan taoge. Terkadang soto kudus juga menggunakan daging kerbau. Kuahnya lebih bening.</p>   
              </p>
              <hr></hr>
            </div>
        )
    }
}
export default Kuliner;