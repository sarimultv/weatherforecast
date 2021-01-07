import React, { useState } from 'react';
import {Button, Row, Col} from 'react-bootstrap';

const ThreeForecast =(props)=>{
    const [threediv, setthreediv] = useState(false)
    const showTemp=()=>{
        setthreediv(true)
    }
    return(
        <div>
        <Button variant="success" onClick={showTemp} onDoubleClick={()=>{
            setthreediv(false)
        }}> Next 3 Days Forecast </Button >
         {threediv ? <div>
             <br/>
            <Row>
                <Col>{props.dtFirst}</Col>
                <Col><img src={props.imFirst} alt="icon" /> {props.nextTemp}°C</Col>
            </Row>
            <Row>
                <Col>{props.dtSec}</Col>
                <Col><img src={props.imSec} alt="icon" />  {props.secTemp}°C</Col>
            </Row>
            <Row>
                <Col>{props.dtThd}</Col>
                <Col><img src={props.imThrd} alt="icon" />  {props.thirdTemp}°C</Col>
            </Row>
            </div> : <p style={{display: 'none'}}>no data</p>} 
        </div>
    )
}

export default ThreeForecast;