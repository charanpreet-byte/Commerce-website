import React, { useState, useContext } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Form, Button, Container } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import UserContext from '../context/UserContext'
import ErrorNotice from "../misc/ErrorNotice"
import Axios from "axios"

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext)
  const history = useHistory()


  const submit = async (e) => {
    e.preventDefault()

    try {
      const newUser = { email, password, passwordCheck, displayName }
      await Axios.post
        ('http://localhost:5000/users/register', newUser)
      const loginRes = await Axios.post('http://localhost:5000/users/login', {
        email,
        password
      })
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      })
      localStorage.setItem('auth-token', loginRes.data.token)
      history.push('/')
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg)
    }
  }
  return (
    <Container
      className="register"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "7rem",
      }}
    >
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Display name</Form.Label>
          <Form.Control type="text" placeholder="Display name" />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
    </Container>
  )
}


