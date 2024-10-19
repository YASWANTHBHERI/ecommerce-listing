import React from 'react';
import Modal from 'react-modal';
import plantImage from '../assests/images/plant.png';



const AddToCartModal = ({ isOpen, onRequestClose, product }) => {
  if (!product) return null;
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="confirmation-modal"
      overlayClassName="confirmation-overlay"
    >
      <div className="confirmation-container">
        <div className="confirmation-header">
          <h3>Your Cart</h3>
          <span className="close-button" onClick={onRequestClose}>&times;</span>
        </div>
        <hr />
        <div className="confirmation-body">
          <h2>Congratulations</h2>
          <h3>Order Placed!</h3>
          <img
             src={plantImage}
            alt="Plant Icon"
            className="confirmation-image"
          />
          <p>Thank you for choosing Chaperone services. We will soon get in touch with you!</p>
          <button className="continue-button" onClick={onRequestClose}>Continue Shopping</button>
        </div>
      </div>
    </Modal>
  );
};

export default AddToCartModal;
