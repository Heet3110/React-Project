import React from 'react';
import logo from './logo.svg';
import './App.css'; 

import { Button, Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/Home";
import {BrowserRouter as Router,  Route, Link} from "react-router-dom";
import Courses from './components/Courses';
import AllCourses from "./components/AllCourses";
 
function App() {
  return(
      <Router>
        <Container>
        <Header />

        <Row>
          <Col md={4}>
            <Menu />
          </Col>
          <Col md={8}>
            <Route path="/" component={Home} exact />
            <Route path="/add-course" component={Courses} exact />
            <Route path="/view-course" component={AllCourses} exact />
            
          </Col>
        </Row>

      </Container>
      </Router>
     
  );
  
}

export default App;
