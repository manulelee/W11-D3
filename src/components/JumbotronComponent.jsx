import { Link } from "react-router-dom";

const JumbotronComponent = () => {
  return (
    <div class="m-4 p-5 bg-dark text-white rounded">
      <h1>OFFERING THE MOST RIDESHARE OPTIONS TO SPACE</h1>
      <p>With end-to-end mission management services to ensure your mission is on time and budget</p>

      <Link to="/articles">
        <div className="btn btn-warning">Take me to the moon!</div>
      </Link>
    </div>
  );
};
export default JumbotronComponent;
