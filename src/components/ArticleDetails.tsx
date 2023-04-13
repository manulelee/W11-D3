import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Article } from "../interfaces/Article";
import { Link } from "react-router-dom";

interface SingleArticleProps {
  article: Article;
}

const ArticleDetails = (props: SingleArticleProps) => {
  return (
    <Col className="m-auto article-details">
      <Card style={{ width: "80%" }}>
        <Card.Img variant="top" src={props.article.imageUrl} />
        <Card.Body>
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-mute">{props.article.publishedAt.toString()}</Card.Subtitle>
          <Card.Text className="cardText">{props.article.summary}</Card.Text>
          <Link to={props.article.url} target="blank">
            <div className="mx-2 btn btn-warning">Go to the page</div>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleDetails;
