import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUrl, onChangeSlider, setPageOne } from '../actions';
import Selection from './Selection';
import Slider from '../components/main/navigation/Slider';
import Button from '../components/main/navigation/Button';
import './Navigation.css';

class Navigation extends Component {
  componentDidUpdate() {
    console.log('render navigation');
  }

  componentDidMount() {
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
      year,
      rating,
      runtime,
    } = this.props.navigation;
    return (
      <div className="wrapper">
        <section id="navigation">
          <Selection />
          <Slider data={year} onChangeSlider={this.props.onChangeSlider} />
          <Slider data={rating} onChangeSlider={this.props.onChangeSlider} />
          <Slider data={runtime} onChangeSlider={this.props.onChangeSlider} />
          <Button onClick={this.props.onSearchButtonClick}>Search</Button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
});

const mapDispatchToProps = dispatch => ({
  onChangeSlider: data => dispatch(onChangeSlider(data)),
  onSearchButtonClick: () => {
    dispatch(setPageOne());
    dispatch(createUrl());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
