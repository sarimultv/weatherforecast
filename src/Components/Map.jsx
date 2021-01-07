import React, { useEffect, useState } from 'react';
import Temps from './Temps';
import { Col, Container, Row } from 'react-bootstrap';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Navbar from './Navbar';

const MapJS =(props)=>{
    let [currLat, setcurrLat] = useState(0)
    let [currLon, setcurrLon] = useState(0)
    useEffect(
        ()=>{
          !navigator.geolocation ? <p>Geolocation not supported</p> : (
          navigator.geolocation.getCurrentPosition((position)=> {
            setcurrLat(position.coords.latitude)
            setcurrLon(position.coords.longitude)

          }))
        },[]
      )

    return(
        <>
        <Navbar />
            <Container className=" mt-4 p-5">
              <Row>
                <Col lg={6} md={6} xs={12}>
                <Temps 
                  currentLat={currLat}
                  currentLon={currLon}
                />
                </Col>
                <Col lg={6} md={6} xs={12} className="p-5">
                  <Map
                  google={props.google}
                  zoom={11}
                  style={{height: '300px',width: '300px'}}
                  center={{ lat: currLat, lng: currLon }}
                  />
                  </Col>
              </Row>
            </Container>
        </>
    )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBdh_bzMdfRM7dV0Jp6vONn3YJrq070nX4'
})(MapJS)
// export default MapJS;