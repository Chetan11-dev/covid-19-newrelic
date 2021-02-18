// doesn't require redux

import React, { useEffect } from 'react';

import DrawMap from '../d3/DrawMap'
import MapInput from '../components/MapInput'

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
const Map = () => {
    useEffect( () => {
        DrawMap(); 
    }, [])

    return (
        <Row style={{alignItems:'center'}}>
            <Col sm="12" md="3" lg="3" xl="4">
                <Card sty>
                    <MapInput />
                </Card>
            </Col>
            <Col sm="12" md="9" lg="9" xl="8" >
                <Card  className="mapviz">

                </Card>
            </Col>
        </Row>
    )
}

export default Map