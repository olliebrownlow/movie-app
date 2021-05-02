import React from "react";
import CreateMovieForm from "../../../components/createMovieForm";
import { getMovieById } from "../../../actions";

class EditMovie extends React.Component {
  static async getInitialProps({ query }) {
    const movie = await getMovieById(query.id)
    return movie;
  }

  render() {
    const movie = this.props;
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <CreateMovieForm initialData={movie} />
      </div>
    );
  }
}

export default EditMovie;
