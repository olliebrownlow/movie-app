import { useRouter } from 'next/router';
import Modal from "./modal";
import CreateMovieForm from "./createMovieForm";
import { createMovie } from "../actions";

const Sidebar = (props) => {
  const { categories } = props;
  const router = useRouter();
  let modal = null;

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      console.log(JSON.stringify(movies));
      modal.closeModal();
      router.push("/");
    });
  };

  return (
    <div>
      <Modal ref={(ele) => (modal = ele)} hasSubmit={false}>
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
