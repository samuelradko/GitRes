import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Nav from "react-bootstrap/Nav";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Store } from "./Store";
import CartScreen from "./screen/CartScreen";
import SigninScreen from "./screen/SinginScreen";
import NavDropdown from 'react-bootstrap/NavDropdown'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShippingAddressScreen from './screen/ShippingAddressScreen';
import SignupScreen from "./screen/SignupScreen";
import PaymentMethodScreen from "./screen/PaymentMethodScreen";
import PlaceOrderScreen from "./screen/PlaceOrderScreen";
import OrderScreen from "./screen/OrderScreen";
import OrderHistoryScreen from "./screen/OrderHistoryScreen";
import ProfileScreen from "./screen/ProfileScreen";
import SearchBox from "./screen/searchBox";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import getError from "./utils";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  // const { state } = useContext(Store);
  // const { cart } = state;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);


  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);


  return (
    <BrowserRouter>
      <div className={sidebarIsOpen
        ? 'd-flex flex-column site-container active-cont'
        : 'd-flex flex column site-container'}
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header />
        <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-1">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <Link
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}>{category}</Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Button variant="dark" onClick={() => setSidebarIsOpen(!sidebarIsOpen)} >
              <i className="fas fa-bars"></i>
            </Button>&nbsp;
            <LinkContainer to="/">
              <Navbar.Brand> Webstore</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <SearchBox />
              <Nav className="me-auto w-100 justify-content-end">
                {userInfo?.isAdmin === false || !userInfo ? (
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                ) : userInfo?.isAdmin === true && (
                  <span></span>
                )}
                {userInfo?.isAdmin === false ? (
                  <NavDropdown title={userInfo?.username} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : !userInfo && (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
                {userInfo?.isAdmin && (
                  <NavDropdown title="Admin" id="admin-nav-dropdown">
                    <LinkContainer to="/admin/products">
                      <NavDropdown.Item>Add/Edit Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orders">
                      <NavDropdown.Item>View/Edit Orders</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/users">
                      <NavDropdown.Item>View/Edit Users</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Admin Profile</NavDropdown.Item>
                    </LinkContainer>
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>


          </Container>
        </Navbar>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/shipping" element={<ShippingAddressScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/payment" element={<PaymentMethodScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<ProtectedRoute> <OrderScreen /> </ProtectedRoute>} />
              <Route path="/orderhistory" element={<ProtectedRoute> <OrderHistoryScreen /> </ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute> <ProfileScreen /> </ProtectedRoute>} />
              <Route path="/search" element={<SearchBox />} />
              <Route path="/" element={<HomeScreen />}></Route>
            </Routes>
          </Container>
        </main>

        <footer>
          <div className="text-center">@2023 All rights to Samuel</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;