import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function Fotos(props) {
  return (
    <div>
        <h2>{props.titulo}</h2>
        <Row md={6}>
          {props.lista.map(item => (
            <Col>
              <Card.Img className='m-1' variant="top" src={"https://image.tmdb.org/t/p/w500/" + item[props.foto]} />
            </Col>
          ))}
        </Row><br />
    </div>
  )
}

export default Fotos