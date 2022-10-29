import React, { useState,useEffect,usefetch } from 'react' 
import axios from 'axios'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Regester = () => {
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    const handleSubmit = (e) => {
        if (e && e.preventDefault) { e.preventDefault(); }
        axios.get('http://127.0.0.1:8000/api/users', {
            email:email,
            password:password,
            address:address
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
             console.log(email, password, address);
    } 
    
    useEffect(() => { 
        handleSubmit();
    }, []);
    return (
        <div>
            <Form 
            >
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                            placeholder="Enter email"
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            defaultValue={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St"
                        defaultValue={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <h1 variant="primary" type="submit" className='btn btn-primary'
                    onClick={() => handleSubmit()}
                >
                    Submit
                </h1>

            </Form>
        </div>
    )
}

export default Regester 