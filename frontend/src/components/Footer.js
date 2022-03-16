import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Created by Rustam, Purnima and Michaela
          </Col>
        </Row>
        </Container>
    </footer>
  )
}

export default Footer