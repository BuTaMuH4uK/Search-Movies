import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAndSetGenres, fetchAndStore } from '../actions';
import mainSelector from '../selectors/mainSelector';
import Navigation from './Navigation';
import Movies from './Movies';
import './Main.css';

class Main extends Component {
  componentDidMount() {
    const { database, fetchAndSetGenres, fetchAndStore } = this.props;

    fetchAndSetGenres(database.url);
    fetchAndStore(database.moviesUrl);
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchAndStore(nextProps.database.moviesUrl);
  }

  render() {
    console.log('render main');

    return (
      <section className="main" >
        <Navigation />
        <Movies />
      </section>
    );
  }
}

const mapStateTpProps = state => ({ database: mainSelector(state) });

const mapDispathToProps = dispatch => ({
  fetchAndSetGenres: genres => dispatch(fetchAndSetGenres(genres)),
  fetchAndStore: url => dispatch(fetchAndStore(url)),
})

export default connect(mapStateTpProps, mapDispathToProps)(Main);
