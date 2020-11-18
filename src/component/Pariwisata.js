import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Pariwisata extends Component{
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
                  <img src="/ls.jpg" width="1300" height="1000"/>
                  <img src="/mk.jpg" width="1300" height="1000"/>
                  <img src="/pm.jpg" width="1300" height="1000"/>
              </Carousel>
              <hr></hr>
              <h1>Lawang Sewu</h1>
                 <p>Lawang Sewu adalah gedung bersejarah milik PT Kereta Api Indonesia (Persero) yang awalnya digunakan sebagai Kantor Pusat perusahaan kereta api swasta Nederlandsch-Indische Spoorweg Maatschappij (NISM). Gedung Lawang Sewu dibangun secara bertahap di atas lahan seluas 18.232 m2.</p>
              <hr></hr>
              <h1>Masjid Kapal</h1>  
                 <p>Konon bangunan masjid ini dibangun karena terinspirasi dari bahtera Nabi Nuh. Tak hanya mirip sebuah kapal, bangunan ini lengkap dengan jendela berbentuk bulat berjumlah 74 , buritan, haluan yang terdiri dari tiga lantai.16 Mei 2019</p>
              <hr></hr>
              <h1>Pantai Marina</h1>
                 <p>Dahulunya Pantai Marina merupakan pantai yang terbentuk dari hasil kegiatan reklamasi pantai di kawasan kota Semarang yang sebelumnya merupakan hutan bakau serta tambak miliki warga setempat. ... Seiring berjalannya waktu pantai ini kemudian mulai ramai di kunjungi oleh masyarakat dan di jadikan sebagai tempat berlibur.</p>
              <hr></hr>
            </div>
        )
    }
}
export default Pariwisata;