import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { Article } from "../interfaces/Article";
import { useNavigate } from "react-router-dom";

interface SingleArticleProps {
  article: Article;
}

const SingleArticle = (props: SingleArticleProps) => {
  const navigate = useNavigate();
  return (
    <Row>
      <Col xs={6} md={4} lg={3}>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={props.article.imageUrl} />
          <Card.Body>
            <Card.Title>{props.article.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.article.publishedAt.toString()}</Card.Subtitle>
            <Card.Text>{props.article.summary}</Card.Text>

            <Button
              className="mx-2"
              variant="success"
              onClick={() => {
                navigate(`/${props.article.id}`);
              }}
            >
              Read article
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SingleArticle;
