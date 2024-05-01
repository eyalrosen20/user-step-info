import React, { useState } from 'react';
import UserInfoModal from './components/UserInfoModal';

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true); 
  const closeModal = () => setModalOpen(false);

  return (
      <div className="App">
          <button onClick={openModal}>Open User Info Stepper</button> 
          <UserInfoModal isOpen={isModalOpen} onClose={closeModal} /> 
      </div>
  );
};

export default App;
