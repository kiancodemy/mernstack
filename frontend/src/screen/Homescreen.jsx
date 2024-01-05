import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import { useGetproductsQuery } from "../slices/productslice";
import { divide } from "lodash";
function Homescreen() {
  const { data: products, isLoading, error } = useGetproductsQuery();
  return (
    <>
      {isLoading ? (
        <h1>loading ....</h1>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <Row>
            <h1>latest products</h1>
            {products.map((product) => {
              return (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product}></Product>
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </>
  );
}

export default Homescreen;
