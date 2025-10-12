import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/blog/1">View Blog Post 1</Link> |{" "}
        <Link to="/profile">Go to Profile</Link>
      </nav>
    </div>
  );
}

export default Home;
