import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export default function Login() {
    const usernameRef = useRef();
    const passwordRef = useRef();

    function login() {
        console.log(usernameRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <Form className='w-75'>
                <Form.Group className="d-flex flex-column align-items-center">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" ref={usernameRef} required />
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                    <Button onClick={login} className="mt-3">Login</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}
