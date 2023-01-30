import React from "react";
import TextTransition, { presets } from "react-text-transition";
const TEXTS = ["FrontEnd Developer"];

export default function Home() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="home">
      {/* left */}
      <div className="left">
        <div className="left-container">
          <h1>Hi, I'm M Ajay Kumar.</h1>
          <h1 className="changing-text">
            <span>A</span>
            <TextTransition springConfig={presets.stiff}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h1>
        </div>
      </div>
      {/* right */}
      <div className="right">
        <div className="image-container">
          <img id="dp" src='https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' alt="Image" />
        </div>
      </div>
    </div>
  );
}