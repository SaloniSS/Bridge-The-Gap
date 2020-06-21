import React from "react";
import SignInWithGoogle from "../components/SignInWithGoogle";
import backdrop from "../assets/gorls.png";

let GLOBAL = require("../global");

function HomePage() {
  GLOBAL.googleID = "";

  const Lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus finibus tortor eget tempus. Curabitur consequat mi quis massa lobortis, a varius ipsum suscipit. Etiam placerat lobortis lacus, a varius turpis luctus quis. Cras augue turpis, vestibulum sed erat nec, vulputate varius enim. Donec pretium, leo nec mollis egestas, nunc tellus sagittis urna, sit amet commodo risus enim tincidunt urna. Vivamus scelerisque lacinia est id venenatis. Maecenas tristique lectus nunc, et rutrum neque mollis vitae. Cras sit amet pulvinar sapien. Vestibulum vel pretium ante, at scelerisque nisl. Mauris feugiat urna id ipsum placerat sollicitudin.";

  return (
    <div className="App">
      <h1 style={{ paddingTop: 25 }}> Bridge The Gap </h1>
      <p> (Inspiration) {Lorem} </p>
      <SignInWithGoogle />
      <p> (How It Works) {Lorem} </p>
      <iframe
        width="75%"
        height="550"
        src="https://www.youtube.com/embed/wV1FrqwZyKw"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Demo Video"
      ></iframe>
      <button
        href="https://devpost.com/software/bridge-the-gap"
        target="_blank"
      >
        Know More
      </button>
      <button
        href="https://github.com/ReshmiCode/Bridge-The-Gap"
        target="_blank"
      >
        Source Code
      </button>
      <img
        src={backdrop}
        alt="Women in  Tech"
        resizeMode={"cover"}
        style={{ width: "100%", paddingTop: 20 }}
        source={{ backdrop }}
      />
      <p>
        {" "}
        Made with 💖 by Medha Jonnada, Megan Tran, Reshmi Ranjith, and Saloni
        Shivdasani{" "}
      </p>
    </div>
  );
}

export default HomePage;
