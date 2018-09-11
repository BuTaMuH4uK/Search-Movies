import { connect } from 'react-redux';
import { onGenreChange } from '../actions';
import Selection from '../components/main/navigation/Selection';

const mapStateToProps = state => ({
  genre: state.navigation.genre,
  genres: state.navigation.genres
});

const mapDispatchToProps = dispatch => ({
  onGenreChange: event => dispatch(onGenreChange(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
