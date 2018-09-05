import React, { Component } from "react";
import { connect } from 'react-redux';
import { setGenres } from '../actions/databaseActions';
import Selection from "../components/main/navigation/Selection";
import Slider from "../components/main/navigation/Slider";
import Button from "../components/main/navigation/Button";
import "./Navigation.css";

class Navigation extends Component {
  componentDidMount() {
    const { database, setGenres } = this.props;

    fetch(database.url)
      .then(response => response.json())
      .then(data => setGenres(data.genres))
      .catch(error => console.log(error));
  }

  render() {
    const {
      genre,
      genres,
      year,
      rating,
      runtime,
    } = this.props.navigation;
    return (
      <div className="wrapper">
        <section id="navigation">
          <Selection
            genre={genre}
            genres={genres}
          />
          <Slider data={year} />
          <Slider data={rating} />
          <Slider data={runtime} />
          <Button>Search</Button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  database: store.database,
  navigation: store.navigation
});

const mapDispatchToProps = dispatch => ({
  setGenres: genres => dispatch(setGenres(genres))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);