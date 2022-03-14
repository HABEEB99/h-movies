import React from 'react';
import Section from './Section';

const Sections = ({ data }) => {
  const filteredData = (videos, genre) => {
    return videos.filter((item) => item.tags.includes(genre));
  };

  const unSeenMovies = (movies) => {
    return movies.filter(
      (movie) => movie.seen === false || movie.seen === null
    );
  };
  return (
    <div className="px-3 sm:px-6 md:px-12 lg:px-32 mx-auto">
      <Section title="Recommended" data={unSeenMovies(data)} />
      <Section title="Drama" data={filteredData(data, 'drama')} />
      <Section title="Action" data={filteredData(data, 'action')} />
      <Section title="Adventure" data={filteredData(data, 'adventure')} />
      <Section title="Biography" data={filteredData(data, 'biography')} />
      <Section title="History" data={filteredData(data, 'history')} />
    </div>
  );
};

export default Sections;
