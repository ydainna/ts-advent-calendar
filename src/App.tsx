import Player from "react-lottie-player";
import "./assets/css/App.scss"
import background from "./assets/lottie/background.json"
import Calendar from "./components/Calendar/Calendar";
import Footer from "./components/layout-components/Footer";

function App() {
  return (
    <>
      <section className="calendar">
        <Player
          loop
          animationData={background}
          play
          className="lottie-background"
        />
        <div className="calendarContainer">
          <Calendar/>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default App
