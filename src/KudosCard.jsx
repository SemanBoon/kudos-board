import React from 'react';

const KudosCard = ({ title }) => {
  return (
    <>
      <h3>{title}</h3>
      <button>Create a Card</button>
      <div className="kudos-card">
        <img src="path_to_image" alt="kudos" />
        <button>Upvote: </button>
        <button>Delete </button>
      </div>
    </>
  );
};

export default KudosCard;
