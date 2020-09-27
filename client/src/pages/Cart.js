import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CartCss.css'
import { Container } from 'react-bootstrap'

const Cart = () => (
    <div>
        <Container className='cartHeading'>
          <img src='https://i.ibb.co/7SS4XZj/shopping-cart-1105049.png'/>  
          <h4>Hey Your Cart Is Empty!</h4>
        </Container>
    </div>
)

export default Cart