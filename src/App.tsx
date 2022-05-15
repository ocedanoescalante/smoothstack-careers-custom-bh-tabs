import React from "react";
// import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from "react-bootstrap"
import Prescreen from "./components/Prescreen/Prescreen";

function App() {
  return (
      <div className="container App-container-wrapper">
        <Row className="justify-content-md-center">
          <Col md={2} />
          <Col md={8}> <Prescreen /></Col>
          <Col md={2} />
        </Row>
      </div>
  );
}

export default App;
