import React,{useRef} from 'react'
import { Container,Form,Button } from 'react-bootstrap'
import {v4 as uuidV4} from 'uuid'

export default function Login({onIdSubmit}) {
    const idRef=useRef();

    function handleSubmit(e){
        e.preventDefault();
        onIdSubmit(idRef.current.value)
    }
    function createNewId(){
        onIdSubmit(uuidV4())
    }
  return (
    <Container className='align-items-center d-flex' 
    style={{height:'100vh'}}>
        <Form className='w-100' onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Label>
                    Enter your ID
                </Form.Label>
                <Form.Control type='text' ref={idRef}></Form.Control>
            </Form.Group>
            <br/>
            <Button type='submit' className='me-2'>Login</Button>
            <Button variant='secondary' onClick={createNewId}>
                Create a New ID
            </Button>
        </Form>
    </Container>
  )
}
