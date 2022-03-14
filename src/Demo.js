import React, { useRef, useState } from "react";
import api from "./btns.json";
import "./Demo.scss";

function Demo() {
  const [buttons, setButtons] = useState(api.location);
  const [images, setImages] = useState(api.images);
  const [selected, setSelected] = useState(api.images[0]);

  const buttonHandler = (id) => {
    setSelected(
      images.find((image) => {
        return id === image.id;
      })
    );
  };
  return (
    <>
      <aside className="this's my left  component">
        {buttons.map((button) => (
          <button onClick={() => buttonHandler(button.id)} key={button.id}>
            {button.text}
          </button>
        ))}
      </aside>
      <aside>
        <div className="images-goes-here">
          <img src={selected.src} key={selected.id} alt="hello" />
        </div>
      </aside>
    </>
  );
}

export default Demo;
