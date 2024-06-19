import React, {useState} from 'react';
import CreateBoardModal from './CreateBoardModal';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="dashboard">
      <div className="filter-buttons">
        <button>All</button>
        <button>Recent</button>
        <button>Celebration</button>
        <button>Thank You</button>
        <button>Inspiration</button>
      </div>
      <div className="create-board">
      <button onClick={() => setShowModal(true)}>Create a New Board</button>
        <CreateBoardModal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Dashboard;
