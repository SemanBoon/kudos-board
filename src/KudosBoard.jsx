import React from 'react';
// import KudosCard from './KudosCard';

const KudosBoard = ({ imgUrl, title, category }) => {
  return (
    <div className="kudos-card">
      <img src={imgUrl } alt="kudos" />
      <h3>{title}</h3>
      <p>{category}</p>
      <button>View Board</button>
      <button>Delete Board</button>
    </div>
  );
};

export default KudosBoard;
