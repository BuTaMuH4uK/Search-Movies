import { connect } from 'react-redux';
import { onChangeSlider } from '../actions';
import Slider from '../components/main/navigation/Slider';

const mapStateToProps = (state, ownProps ) => ({
  data: ownProps.data
});

const mapDispatchToProps = dispatch => ({
  onChangeSlider: data => dispatch(onChangeSlider(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
