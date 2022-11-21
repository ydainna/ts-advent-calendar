import { useState } from "react";
import Player from "react-lottie-player";
import Modal from "react-modal";
import santa from "../../assets/lottie/santa.json"
import dataCalendar from "../../assets/data/data.calendar.json"
import event from "../../assets/data/data.event.json"
import Roulette from "../Roulette/Roulette";

export default function Calendar() {
  const [dataIndex, setDataIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const checkDay = (day: number, index: number) => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const today = date.getDate();
    if (month === 12 && today === day) {
      setModalIsOpen(true);
      setDataIndex(index);
    }
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
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
        </div>
      </Modal>
    </>
  )
}