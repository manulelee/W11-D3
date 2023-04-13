import { useState, useEffect } from "react";
import SingleArticle from "./SingleArticle";
import { Article } from "../interfaces/Article";
import ErrorComponent from "./ErrorCompontent";
import LoadingComponent from "./LoadingComponent";
import Row from "react-bootstrap/Row";

const FetchComponent = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const endpoint = `https://api.spaceflightnewsapi.net/v3/articles/`;

  const FetchData = async () => {
    try {
      let response = await fetch(endpoint);
      setIsLoading(true);
      if (response.ok) {
        let data = await response.json();
        console.log("DATA: ", data);
        setArticles(data);
        setIsLoading(false);
      } else {
        console.log("Errore durante la chiamata");
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log("Error: ", error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    FetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Row className="mt-4">
        {isLoading && <LoadingComponent />}
        {isError && <ErrorComponent />}
        {articles.map((article) => {
          return <SingleArticle article={article} key={article.id} />;
        })}
      </Row>
    </>
  );
};

export default FetchComponent;
