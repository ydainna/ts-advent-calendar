import { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import Wilder from "../../assets/data/data.wilder.json";

export default function Roulette() { 
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpin = () => {
    const newPrizeNumber = Math.floor(Math.random() * Wilder.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        spinDuration={0.2}
        prizeNumber={prizeNumber}
        data={Wilder}
        outerBorderColor={"#ccc"}
        outerBorderWidth={9}
        innerBorderColor={"#f2f2f2"}
        radiusLineColor={"tranparent"}
        radiusLineWidth={1}
        textColors={["#f5f5f5"]}
        textDistance={55}
        fontSize={10}
        backgroundColors={[
          "#3f297e",
          "#175fa9",
          "#169ed8",
          "#239b63",
          "#64b031",
          "#efe61f",
          "#f7a416",
          "#e6471d",
          "#dc0936",
          "#e5177b",
          "#be1180",
          "#871f7f"
        ]}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button className="roulette-button" onClick={handleSpin}>Tourner la roue</button>
    </>
  );
};

