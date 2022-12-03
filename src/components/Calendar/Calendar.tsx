import { useState } from "react";
import Player from "react-lottie-player";
import Modal from "react-modal";
import { ToastContainer, toast, Zoom } from "react-toastify";
import santa from "../../assets/lottie/santa.json"
import dataCalendar from "../../assets/data/data.calendar.json"
import event from "../../assets/data/data.event.json"
import Roulette from "../Roulette/Roulette";
import "react-toastify/dist/ReactToastify.css";

export default function Calendar() {
  const [dataIndex, setDataIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const checkDay = (day: number, index: number) => {
    const date: Date = new Date();
    const month: number = date.getMonth() + 1;
    const today: number = date.getDate();
    if (month === 12 && today === day) {
      setModalIsOpen(true);
      setDataIndex(index);
    } else {
      notify();
    }
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };


  const notify = () => {
    toast.error(
      <div>
        <p id="errorText">Il n'est pas encore l'heure d'ouvrir cette case...</p>
      </div>,
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      }
    );
  };

  return (
    <>
      <Player
        className="lottie-calendar"
        loop
        play
        animationData={santa}
        style={{ height: "300px", width: "300px" }}
      />
      <div className="container">
        {dataCalendar.map((item, index) => (
          <button key={index} onClick={() => checkDay(item.id, index)} className="day">
            {item.id}
          </button>
        ))}
      </div>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className="modal"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <div className="container-modal">
          <img src={dataCalendar[dataIndex].dailyPicture} alt={dataCalendar[dataIndex].dailyPictureDescription} className="modal-picture" />
          <h2>{`${dataCalendar[dataIndex].id} Décembre`}</h2>
          <p>{event[Math.floor(Math.random() * event.length)].event}</p>
          <hr/>
          <Roulette/>
          <button className="button-close" onClick={handleCloseModal}>❌</button>
        </div>
      </Modal>
      <ToastContainer />
    </>
  )
}