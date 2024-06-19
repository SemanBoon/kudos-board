import React, { useState } from 'react';
import './CreateBoardModal.css';

const CreateBoardModal = ({showModal, setShowModal}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if (category === '') {
        return
    };
}

  return (
    <>
      {showModal ? (
        <div className="modal">
          <div className="modal-content">
            <span className = "close" onClick={() => setShowModal(false)}>&times;</span>
            <form className ="board-info"onSubmit={handleSubmit}>
              <label FOR="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              /><br /><br />
              <label FOR="category">Category:</label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="">Select one:</option>
                <option value="Recent">Recent</option>
                <option value="Thank You">Thank You</option>
                <option value="Celebration">Celebration</option>
                <option value="Inspiration">Inspiration</option>
              </select><br /><br />
              <label FOR="author">Author:</label>
              <input
                type="text"
                id="author"
                name="author"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              /><br /><br />
              <input className ="submit-button"type="submit" value="Create Board" />
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CreateBoardModal;
