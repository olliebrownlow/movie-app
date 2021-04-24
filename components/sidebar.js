import Modal from "./modal";
import CreateMovieForm from "./createMovieForm";
import { createMovie } from "../actions";

const Sidebar = (props) => {
  const { categories } = props;

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      console.log(JSON.stringify(movies));
    });
  };

  return (
    <div>
      <Modal hasSubmit={false}>
        <CreateMovieForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
        {categories.map((category) => (
          <a href="#" key={category.id} className="list-group-item">
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
