import React from "react";
import Selection from "./Selection";
import Slider from "./Slider";
import Button from "./Button";
import "./Navigation.css";

class Navigation extends React.Component {
  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.props.setGenres(data.genres))
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
      onChange,
      onGenreChange,
      onSearchButtonClick
    } = this.props;
    return (
      <div className="wrapper">
        <section id="navigation">
          <Selection
            genre={genre}
            genres={genres}
            onGenreChange={onGenreChange}
          />
          <Slider data={year} onChange={onChange} />
          <Slider data={rating} onChange={onChange} />
          <Slider data={runtime} onChange={onChange} />
          <Button onClick={onSearchButtonClick}>Search</Button>
        </section>
      </div>
    );
  }
}

export default Navigation;
