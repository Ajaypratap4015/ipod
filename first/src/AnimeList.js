import React, { Component } from "react";
import AnimeCard from "./AnimeCard"; 

class AnimeList extends Component {
  render() {
    const { anime } = this.props; 

    return (
      <div className="anime-list">
        {}
        {anime.map((animeData, index) => (
          <AnimeCard key={index} name={animeData.name} image={animeData.image} />
        ))}
      </div>
    );
  }
}

export default AnimeList;
