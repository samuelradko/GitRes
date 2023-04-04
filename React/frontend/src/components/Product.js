import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { Store } from '../Store';
import Col from 'react-bootstrap/esm/Col';
import Badge from 'react-bootstrap/esm/Badge';


const Product = (props) => {
    const { product } = props;

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state;

    const addToCartHandler = async (product) => {
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/product/${product._id}`);
        if (data.countInStock < quantity) {
            window.alert("Sorry, we don't have that many in stock");
            return;
        }
        ctxDispatch({
            type: "Add_To_Cart",
            payload: { ...product, quantity },
        });
    }
    return (
        <Card key={product.slug}>
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt="" className="card-img-top" />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.slug}`}>
                    <Card.Title>{product.name}
                        <Card.Subtitle>{product.brand}</Card.Subtitle>
                    </Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                <Card.Text>Price {product.price}$ </Card.Text>
                <Card.Text>Description: {product.description}</Card.Text>
                <Card.Text>In stock: {product.countInStock}</Card.Text>
                {product.countInStock === 0 ? (
                    <Button variant="danger" disabled>
                        Out Of Stock
                    </Button>
                ) : (
                    <Button onClick={() => addToCartHandler(product)}>Add To Cart</Button>
                )}
                <Col>
                    {product.countInStock > 0 ?
                        <Badge bg='success'>In stock</Badge>
                        : <Badge bg='danger'>Out of Stock</Badge>
                    }
                </Col>
            </Card.Body>
        </Card>

    );

}

export default Product;