import React, { Component } from "react";
import Navigation from "./Navigation";
import Movies from "./Movies";
import { connect } from 'react-redux';
import "./Main.css";

class Main extends Component {
  componentDidMount() {
    /*const saveState = this.getStateFromLocalStorage();
    if (!saveState || (saveState && !saveState.movies.length)) {
      this.fetchMovies(this.state.moviesUrl);
    } else {
      this.setState({ ...saveState });
      this.generateUrl(saveState);
    }*/

  }

  render() {
    const { movies } = this.props.movies;

    return (
      <section className="main">
        <Navigation />
        <Movies
          movies={movies}
        />
      </section>
    );
  }
}

const mapStateToProps = store => {
  return {
    movies: store.movies,
  }
}

export default connect(mapStateToProps)(Main);