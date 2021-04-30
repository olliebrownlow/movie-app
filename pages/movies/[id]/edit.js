import React from "react";
import CreateMovieForm from "../../../components/createMovieForm";
import { getMovieById } from "../../../actions";

class EditMovie extends React.Component {
  static getInitialProps({ query }) {
    return { query };
  }

  state = {
    movie: {},
  };

  componentDidMount() {
    const { id } = this.props.query;
    getMovieById(id).then((movie) => {
      this.setState({ movie });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        {JSON.stringify(this.state.movie)}
        <CreateMovieForm />
      </div>
    );
  }
}

export default EditMovie;
