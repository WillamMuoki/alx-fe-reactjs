import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return (
    <div>
      <h2>Viewing Blog Post #{id}</h2>
    </div>
  );
}

export default BlogPost;
