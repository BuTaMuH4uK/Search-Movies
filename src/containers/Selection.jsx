import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onGenreChange } from '../actions';
import './Selection.css';

class Selection extends Component {
  componentDidUpdate() {
    console.log('render selection');
  }

  render() {
    return (
      <div className="selection">
        <label>Genre</label>
        <select value={this.props.genres.localGenres} onChange={this.props.onGenreChange}>
          {this.props.genres.genres.map(genre => (
            <option key={genre.id} value={genre.name}>{genre.name}</option>
          ))}
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  genres: state.listGenres
});

const mapDispatchToProps = dispatch => ({
  onGenreChange: event => dispatch(onGenreChange(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
