import React from "react";
import AppStore from "../assets/images/app-store.jpg";
import iphoneMobile from "../assets/images/iphoneMobile.png";

function Download() {
  return (
    <section className="download-app">
      <aside className="app-store-container">
        <div className="app-store">
          <h4>Теперь мы в App Store!</h4>
          <p>
            Magna egestas blandit ut ante. Fames quis orci nullam senectus
            laoreet tellus. Eu, quis sed dui justo, nibh justo. Sed justo,
            maecenas id mauris, aliquet adipiscing. Aenean dui tellus sodales
            hendrerit a praesent nec accumsan. Lectus tellus cras in nulla. Eget
            tellus urna molestie neque et ut. Pharetra semper eu magna amet
            ipsum ullamcorper elementum adipiscing. Volutpat morbi.
          </p>
          <button type="button">
            <img src={AppStore} alt="app-store" />
          </button>
        </div>
      </aside>
      <aside className="iphone-img">
        <div className="img-container">
          <img src={iphoneMobile} alt="" />
        </div>
      </aside>
    </section>
  );
}

export default Download;
