import axios from 'axios';
import { useContext, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from '../components/Rating'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import { Store } from '../Store';



const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            console.log(state);
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            console.log(state, action.payload);
            return { ...state, product: action.payload, loading: false };
        case "FETCH_FAIL":
            console.log(state, action.type, action.payload);
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};



const ProductScreen = () => {
    const params = useParams();
    const { slug } = params;

    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const result = await axios.get(`/api/products/${slug}`);
                dispatch({ type: "FETCH_SUCCESS", payload: result.data });
                console.log(result.data);
            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: getError(err) });
            }
        };
        fetchData();
    }, [slug]);




    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state;

    const addToCartHandler = async () => {
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/product/${product._id}`);
        if (data.countInStock < quantity) {
            window.alert(`Sorry the product ${product.name} is out of stock`)
            return;
        }
        ctxDispatch({
            type: "Add_To_Cart",
            payload: { ...product, quantity},
        });
    }

    return loading ? (
        <LoadingBox />
    ) : error ? (
        <MessageBox variant="danger"> {error}</MessageBox>
    ) : (
        <div>
            <Row>
                <Col md={5}>
                    <img className='img-large' src={product.image} alt={product.name} />
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Helmet>
                                <title>{product.name}</title>
                            </Helmet>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className='d-grid'>
                                <Button variant='primary' onClick={addToCartHandler}>Add To Cart</Button>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price: {product.price}$</Col>
                                        <Col>${product.description}</Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {product.countInStock > 0 ?
                                                <Badge bg='success'>In stock</Badge>

                                                : <Badge bg='danger'>Out of Stock</Badge>
                                            }
                                        </Col>
                                    </Row>
                                </ListGroup>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )

}

export default ProductScreen
