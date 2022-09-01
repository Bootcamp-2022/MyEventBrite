import React from 'react'
import { useLocation } from 'react-router-dom';
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
const ForgotPassword = () => {
    const location = useLocation()
    console.log(location)
  return (
    <FormContainer>
      <h3>Forgot Password</h3>
      <Form>
        <Form.Group controlId="email">
          <Form.Label> Type your email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="my-2">
          Send Link
        </Button>
        </Form>
      </FormContainer>
  )
}

export default ForgotPassword