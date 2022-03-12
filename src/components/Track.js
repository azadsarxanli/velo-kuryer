import React from "react";
import trackKuryer from "../assets/images/velokuryer-tracking-iphone.png";

function Track() {
  return (
    <section className="tracker">
      <aside className="img-aside">
        <img src={trackKuryer} alt="track-kuryer" />
      </aside>
      <aside className="content-aside">
        <div className="content">
          <h4>Трекер курьера </h4>
          <p>
            Nunc hendrerit cursus molestie interdum nulla nulla. Magna duis quis
            elit, rhoncus amet, eu duis condimentum purus. Eu sit dignissim ut
            ipsum vel scelerisque id ac. Turpis donec dolor vulputate et iaculis
            faucibus. Tempus urna enim maecenas feugiat amet, ultricies sit
            massa. Vestibulum erat.
          </p>
        </div>
      </aside>
    </section>
  );
}

export default Track;
