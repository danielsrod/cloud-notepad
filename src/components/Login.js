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
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh', background: '#4F4D52' }}>
            <Form className='w-75' style={{ background: '#807E83' }}>
                <Form.Group className="d-flex flex-column align-items-center">
                    <Form.Label style={{ color: '#00C9A4' }}>Username</Form.Label>
                    <Form.Control type="text" ref={usernameRef} className="w-50" style={{ background: '#C4C4C4' }} required />
                    <Form.Label style={{ color: '#00C9A4' }}>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} className="w-50" style={{ background: '#C4C4C4' }} required />
                    <Button onClick={login} className="mt-3" style={{}}>Login</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

//807E83