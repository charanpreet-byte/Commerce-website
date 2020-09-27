import React, { useState, useEffect } from 'react'
import './HomeCss.css'
import { Card, Button, Container, Row, } from 'react-bootstrap'
import Axios from 'axios'
import { useStoreActions, useStoreState } from 'easy-peasy'

const Layout = () => {
  const [items, setItmes] = useState([])
  const count = useStoreState(state => state.count)
  const add = useStoreActions(actions => actions.add)

  useEffect(() => {
    Axios.get('http://localhost:3000/products')
      .then(res => {
        setItmes(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })


  function displayCard() {
    if (!items.length) return null

    return items.map((item, index) => (
      <Card style={{
        width: '21rem',
        marginRight: "7px",
        marginLeft: '7px',
        marginBottom: '13px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Card.Img variant="top" src={item.url} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Button variant="primary"
            onClick={() => add()}
          >
            Buy Now
              </Button>
        </Card.Body>
      </Card>
    ))
  }

  console.log(count)

  return (
    <div>
      <Container><Row>{displayCard()}</Row></Container>
    </div>
  )
}

export default Layout