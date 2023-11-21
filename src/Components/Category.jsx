import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div
      className="bg-gray-100 rounded-xl p-10 w-auto "
      style={{ backgroundColor: `#${category.hexCode}` }}
    >
      {category.image && (
        <img
          src={category.image.asset.url}
          alt={category.title}
          className="w-40"
        />
      )}
      <h4 className="text-2xl py-3 font-bold capitalize">{category.title}</h4>
      <p>{category.description}</p>
      <Link to={"/filteredfoods/" + category.slug.current}>
        <button
          style={{ backgroundColor: "#FE043C" }}
          className="rounded mt-3 px-5 py-2 text-white"
        >
          View
        </button>
      </Link>
    </div>
  );
};
export default Category;
