import { useState, useEffect } from "react";
import SingleArticle from "./SingleArticle";
import { Article } from "../interfaces/Article";
import ErrorComponent from "./ErrorCompontent";
import LoadingComponent from "./LoadingComponent";

const FetchComponent = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const endpoint = "https://api.spaceflightnewsapi.net/v3/articles";

  const FetchData = async () => {
    try {
      let response = await fetch(endpoint);
      setIsLoading(true);
      if (response.ok) {
        let data = await response.json();
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
  }, []);

  return (
    <>
      {isLoading && <LoadingComponent />}
      {isError && <ErrorComponent />}
      {articles.map((article) => {
        return <SingleArticle article={article} key={article.id} />;
      })}
    </>
  );
};

export default FetchComponent;
