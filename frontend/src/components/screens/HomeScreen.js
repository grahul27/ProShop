import React from "react";
import products from "../../products";
import { Row, Col } from "react-bootstrap";
import Product from "../Product";

const HomeScreen = () => {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={3}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
