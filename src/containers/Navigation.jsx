import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUrl, setPageOne } from '../actions';
import SelectionWrapper from './SelectionWrapper';
import SliderWrapper from './SliderWrapper';
import Button from '../components/main/navigation/Button';
import navigationSelector from '../selectors/navigationSelector';
import './Navigation.css';

class Navigation extends Component {
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
      genre,
      genres,
      year,
      rating,
      runtime,
    } = this.props.navigation;
    
    return (
      <div className="wrapper">
        <section id="navigation">
          <SelectionWrapper genre={genre} genres={genres} />
          <SliderWrapper data={year} />
          <SliderWrapper data={rating} />
          <SliderWrapper data={runtime} />
          <Button onClick={this.props.onSearchButtonClick}>Search</Button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  navigation: navigationSelector(state)
});

const mapDispatchToProps = dispatch => ({
  onSearchButtonClick: () => {
    dispatch(setPageOne());
    dispatch(createUrl());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
