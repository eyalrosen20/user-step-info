import React, { useState } from "react";
import Modal from "react-modal";
import StepOne from "../steps/StepOne";
import StepTwo from "../steps/StepTwo";
import StepThree from "../steps/StepThree";

Modal.setAppElement('#root');

interface UserInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserInfoModal: React.FC<UserInfoModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    age: ''
  });

  const handleNextStep = (values: any) => {
    setUserData({ ...userData, ...values });  // Update userData with new values from the form
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);  // Move to the next step if not the last step
    }
  };

  const handleFinish = () => {
    localStorage.setItem('userInfo', JSON.stringify(userData));
    onClose();  // Close the modal after saving data
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="User Info">
      {currentStep === 1 && (
        <StepOne
          initialFirstName={userData.firstName}
          initialLastName={userData.lastName}
          onValidSubmit={handleNextStep}
        />
      )}
      {currentStep === 2 && (
        <StepTwo
          initialAge={userData.age}
          onValidSubmit={handleNextStep}
        />
      )}
      {currentStep === 3 && (
        <StepThree userData={userData} />
      )}

      {currentStep > 1 ? (
        <button onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
      ): (
        <button disabled>Back</button>
      )}

      {currentStep === 3 && (
        <button onClick={handleFinish}>Finish</button>
      )}
    </Modal>
  );
};

export default UserInfoModal;