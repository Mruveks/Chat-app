import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import basicImg from '../Assets/basicprofilepicture.jpg'
import './signup.css'

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [image, setImage] = useState(null);
    const [uploadingImg, setUploadingImg] = useState(false);
    const [previewImg, setPrevievImg] = useState(null);

    
    function validateImg(e) {    
        const file = e.target.files[0];
        if(file.size >= 1048576){
            return alert("Max file size is 1mb")
        }else {
            setImage(file);
            setPrevievImg(URL.createObjectURL(file));
        }
    }
    
    async function uploadImg(){
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'wsngsmw9');
        try{
            setUploadingImg(true);
            let res = await fetch('https://api.claudinary.com/v1_1/dzvwmzt77/image/upload', {
                method: "POST",
                body: data
            })
            const urlData = await res.json();
            setUploadingImg(false);
            return urlData.url
        } catch(err) {
            setUploadingImg(false);
            console.log(err)
        }
    }

    async function handleSignup(e){
        e.preventDefault();
        if(!image){
            return alert("Please upload profile picture");
        }   else {
            const url = await uploadingImg(image);
        }
    }   

    return (
        <Container>
            <Row>
                <Col md={5} className="signup_bg"></Col>
                <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                    <Form style={{width: '80%', maxWidth: 500}} onSubmi={handleSignup}>
                        <h1 className="text-center">Create account</h1>
                        <div className="signup-profile-pic_container">
                            <img src={previewImg || basicImg} className="signup-profile-pic"></img>
                            <label htmlFor="image-upload" className="image-upload-label">
                                <i className="fas fa-plus-circle add-picture-icon"></i>
                            </label>
                            <input type="file" id="image-upload" hidden accept="image/png, image/jpg" onChange={validateImg}></input>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Create account
                        </Button>
                        <div className="py-4">
                            <p className="text-center">
                                Dont't have an account? <Link to="/signup">Signup</Link>
                            </p>
                        </div>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;
