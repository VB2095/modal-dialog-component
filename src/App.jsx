import './App.css'
import Modal from './lib/Modal.jsx'
import { useState } from 'react'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
};
  return (
    <>
    <p>App</p>
        <button onClick={handleClick}>Ouvrir la modal</button>
        <Modal  isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <p>Modal</p>
    </Modal>
    </>
  )
}

export default App
