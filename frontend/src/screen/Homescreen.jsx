import products from "../Products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
function Homescreen() {
  return (
    <>
      <h1>latest ProductS</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}></Product>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Homescreen;
