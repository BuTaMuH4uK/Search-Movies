import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveGenres, updateUrl, onGenreChange, onChangeSlider, setPageOne } from '../actions';
import Selection from '../components/main/navigation/Selection';
import Slider from '../components/main/navigation/Slider';
import Button from '../components/main/navigation/Button';
import './Navigation.css';

class Navigation extends Component {
  componentDidMount() {
    const { database, setGenres } = this.props;

    fetch(database.url)
      .then(response => response.json())
      .then(data => setGenres(data.genres))
      .catch(error => console.log(error));

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let scrollTop = window.scrollY;
    let id = document.getElementById("navigation");
    if (window.innerWidth > 768) {
      if (scrollTop < 81) {
        if (id.classList.contains("fixed")) {
          document.getElementById("navigation").classList.remove("fixed");
        }
      } else {
        document.getElementById("navigation").classList.add("fixed");
      }
    }
  };

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
            onGenreChange={this.props.onGenreChange}
          />
          <Slider data={year} onChangeSlider={this.props.onChangeSlider} />
          <Slider data={rating} onChangeSlider={this.props.onChangeSlider} />
          <Slider data={runtime} onChangeSlider={this.props.onChangeSlider} />
          <Button onClick={() => this.props.onSearchButtonClick(this.props)}>Search</Button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  database: store.database,
  navigation: store.navigation,
  movies: store.movies
});

const mapDispatchToProps = dispatch => ({
  setGenres: genres => dispatch(receiveGenres(genres)),
  onGenreChange: event => dispatch(onGenreChange(event)),
  onChangeSlider: data => dispatch(onChangeSlider(data)),
  onSearchButtonClick: (state) => {
    dispatch(setPageOne());

    const { genres, year, rating, runtime} = state.navigation;
    const selectedGenre = genres.find(genre => genre.name === state.navigation.genre);
    const genreId = selectedGenre.id;

    const moviesUrl =
      `https://api.themoviedb.org/3/discover/movie?` +
      `api_key=${process.env.REACT_APP_TMDB_API_KEY}&` +
      `language=en-US&sort_by=popularity.desc&` +
      `with_genres=${genreId}&` +
      `primary_release_date.gte=${year.value.min}-01-01&` +
      `primary_release_date.lte=${year.value.max}-12-31&` +
      `vote_average.gte=${rating.value.min}&` +
      `vote_average.lte=${rating.value.max}&` +
      `with_runtime.gte=${runtime.value.min}&` +
      `with_runtime.lte=${runtime.value.max}&` +
      `page=${state.movies.page}`;

    dispatch(updateUrl(moviesUrl));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
