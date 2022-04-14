import React,{useEffect} from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { Row,Col, ListGroup,Image, Form,Button, Card} from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'
import Message from '../components/Message'



const CartScreen = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const eventId = params.id 

  const qty1 = location.search ? Number(location.search.split('=')[1]) : 1
  //const qty2 = location.search ? Number(location.search.split('=')[1]) : 1
  useEffect(() => {
      if(eventId){
    dispatch(addToCart(eventId, qty1))
      }
  }, [dispatch,eventId,qty1])

  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart

  const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id))
  }
  const checkoutHandler = () =>{
      navigate('/login?redirect=/shipping')
  }
  return (
    <Row>
        <h1>Shopping Cart</h1>
      <Col md={8}>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.event}>
                <Row>
                  <Col md={2}>
                    <Image style={{height:'10rem',width: '8rem'}}src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/event/${item.event}`}>{item.name}</Link>
                  </Col>
                  
                  <Col md={2}>${item.adtPrice}</Col>
                     <Col md={2}>
                    <Form.Control style={{color:'purple',width: '60%'}}
                      as='select'
                      value={item.qty1}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.event, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.tickets).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                     </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.event)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty1, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty1 * item.adtPrice, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen