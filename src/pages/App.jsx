import '../styles/index.page.css';
import { useState, useEffect } from 'react';

const randomGradient = () => {
  const hexValues = "0123456789abcdef";
  const color1 = generateRandomHexCode(hexValues);
  const color2 = generateRandomHexCode(hexValues);

  const gradient = `linear-gradient(45deg, #${color1}, #${color2})`;

  return gradient;
}

const generateRandomHexCode = (hexValues) => {
  let hexCode = "";

  for (let i = 0; i < 6; i++) {
    hexCode += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
  }

  return hexCode;
}

const App = () => {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    var date = new Date();
    setTime(`${String(date.getHours()).padStart(2, 0)}:${String(date.getMinutes()).padStart(2, 0)}`);
  }, []);

  return (
    <div
      className="app"
      style={{
        background: `${randomGradient()}`,
        height: "100vh"
      }}
    >
      <div className="flex flex-end">
        <h1 className="clock">{time}</h1>
      </div>
      <div className="flex flex-center">
        <form action="https://www.google.com/search" style={{ width: "50vw" }}>
          <input type="text" placeholder="Search on Google" className="field-search" name="q" />
        </form>
      </div>
    </div>
  );
};

export { App };
