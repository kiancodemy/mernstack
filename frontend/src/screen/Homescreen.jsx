import products from "../Products";
import { Row, Col } from "react-bootstrap";
function Homescreen() {
  return (
    <>
      <h1>latest ProductS</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              {product.name}
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Homescreen;
