import moment from "moment-timezone";

export default function Footer() {
  const year = moment().tz("Europe/Paris").format("YYYY");
  const daysLeft = moment(`${year}-12-25`).diff(moment(), "days");

  return (
    <footer>
      <p>Made with <span>❤️</span> by Ydainna</p>
      <p>Il reste {daysLeft} jours avant Noël</p>
    </footer>
  )
}