import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import products from "../Products";
function Productscreen() {
  const { id } = useParams();
  const product = products.find((item) => item._id === id);
  console.log(product);

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.image} fluid></Image>
        </Col>
        <Col md={4}>
          <ListGroup variant="flusjh">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} review`}
              ></Rating>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>price:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>

                  <Col></Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>status</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "instock" : "out of stock"}
                    </strong>
                  </Col>

                  <Col></Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Productscreen;
