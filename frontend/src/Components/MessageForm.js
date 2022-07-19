import React from 'react'
import './messageform.css'
import { Form, Button, Col, Row } from 'react-bootstrap';

const MessageForm = () => {

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <>
            <div className="messages-output"></div>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={11}>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Your message"></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={1}>
                            <Button variant="primary" type="submit" style={{ wwidth: "100%", backgroundColor: "orange"}}>
                                <i className="fas fa-paper-plane"></i>
                            </Button>
                        </Col>
                    </Row>
                </Form>
            
        </>    
    )
}

export default MessageForm
