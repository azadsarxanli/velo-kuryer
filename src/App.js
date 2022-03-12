import "./reset.scss";
import "./App.scss";
import mapImage from "./assets/images/map-first.png";
import trackKuryer from "./assets/images/velokuryer-tracking-iphone.png";
import AppStore from "./assets/images/app-store.jpg";
import iphoneMobile from "./assets/images/iphoneMobile.png";

function App() {
  return (
    <div className="App">
      <main className="section-header">
        <header>
          <div className="logo">
            <h3>VELOKURYER</h3>
          </div>
          <nav className="nav-header">
            <ul>
              <li>Тарифы</li>
              <li>FAQ</li>
              <li>Виды доставок</li>
              <li className="phone">
                <i>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.01 12.38C15.78 12.38 14.59 12.18 13.48 11.82C13.13 11.7 12.74 11.79 12.47 12.06L10.9 14.03C8.07 12.68 5.42 10.13 4.01 7.2L5.96 5.54C6.23 5.26 6.31 4.87 6.2 4.52C5.83 3.41 5.64 2.22 5.64 0.99C5.64 0.45 5.19 0 4.65 0H1.19C0.65 0 0 0.24 0 0.99C0 10.28 7.73 18 17.01 18C17.72 18 18 17.37 18 16.82V13.37C18 12.83 17.55 12.38 17.01 12.38Z"
                      fill="#4D744F"
                    />
                  </svg>
                </i>{" "}
                (+994 50) 202 17 52
              </li>
              <li className="language">
                RU
                <i>
                  <svg
                    width="7"
                    height="4"
                    viewBox="0 0 7 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.8225 0L3.5 2.47233L6.1775 0L7 0.761134L3.5 4L0 0.761134L0.8225 0Z"
                      fill="white"
                    />
                  </svg>
                </i>
              </li>
            </ul>
          </nav>
        </header>
        <section className="rent-section">
          <aside className="rent">
            <div className="rent-container">
              <h4 className="rent-header">
                Экологичная <br /> доставка в Баку
              </h4>
              <p className="rent-description">
                Natoque et ut orci malesuada molestie. Tellus mi dis neque,
                nisi. Sit luctus lacus urna, non scelerisque porta. Turpis diam
                aliquam volutpat faucibus suspendisse.{" "}
              </p>
              <button type="button" className="btn-green">
                Заказать доставку
              </button>
            </div>
          </aside>
          <aside className="rent-adress">
            <form action="#">
              <h4 className="rent-adress-header">Рассчитайте доставку</h4>
              <div className="input from">
                <i>
                  <svg
                    width="14"
                    height="20"
                    viewBox="0 0 14 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z"
                      fill="#2F2F38"
                    />
                  </svg>
                </i>
                <input placeholder="Откуда" type="text" name="" id="" />
              </div>
              <div className="input to">
                <i>
                  <svg
                    width="14"
                    height="20"
                    viewBox="0 0 14 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z"
                      fill="#2F2F38"
                    />
                  </svg>
                </i>
                <input placeholder="Куда" type="text" name="" id="" />
              </div>
              <div className="kilogram-amount">
                <button type="button" className="active">
                  до 5 кг
                </button>
                <button type="button">до 10 кг</button>
                <button type="button">до 20 кг</button>
              </div>
              <div className="hour">
                <button type="button">за 3 часа</button>
                <button type="button">за 24 часа</button>
                <button type="button">за 48 часа</button>
              </div>
              <button type="submit" className="rent-submit">
                Рассчитать стимость
              </button>
            </form>
          </aside>
        </section>
      </main>
      <section className="map-section">
        <aside className="map-config">
          <h4>Зоны доставки</h4>
          <p>
            Venenatis convallis tempus, mi posuere accumsan, enim elit vitae,
            cras. Enim nibh morbi cras eu libero.
          </p>
          <div className="locations">
            <button type="button" className="active">
              зона А
            </button>
            <button type="button">зона Б</button>
            <button type="button">зона C</button>
          </div>
          <div className="hour">
            <button type="button">за 3 часа</button>
            <button type="button">за 24 часа</button>
            <button type="button">за 48 часа</button>
          </div>
        </aside>
        <aside className="map-container">
          <div className="map-img">
            <img src={mapImage} alt="" />
          </div>
        </aside>
      </section>
      <section className="cards">
        <h4 className="cards-header">Виды доставок</h4>
        <div className="card-container">
          <div className="card">
            <h4 className="card-header">Доставка за 3 часа</h4>
            <p>
              Interdum mattis pharetra sagittis dolor et congue. Sollicitudin
              nulla sed viverra diam tincidunt.
            </p>
          </div>
          <div className="card">
            <h4 className="card-header">Доставка за 3 часа</h4>
            <p>
              Interdum mattis pharetra sagittis dolor et congue. Sollicitudin
              nulla sed viverra diam tincidunt.
            </p>
          </div>
          <div className="card">
            <h4 className="card-header">Доставка за 3 часа</h4>
            <p>
              Interdum mattis pharetra sagittis dolor et congue. Sollicitudin
              nulla sed viverra diam tincidunt.
            </p>
          </div>
        </div>
      </section>
      <section className="reason-order">
        <aside className="reason-description">
          <div className="content">
            <h4>Как сделать заказ?</h4>
            <p>
              Оформление заказа проходит всего через 3 этапа. Для начала
              рассчитайте стоимость услуги курьера с помощью электронного
              калькулятора. Далее переходим в пункт “вызовите курьера”,в котором
              вы можете выбрать курьера, который находится ближе к указанному
              адресу. Следующий этап заключается в ожидании вашего курьера.
            </p>
            <button type="button" className="btn-green">
              Заказать доставку
            </button>
          </div>
        </aside>
        <aside className="reason-btns">
          <div className="btns-container">
            <div className="btn">
              <span>1</span> <p>Рассчитайте стоимость</p>
            </div>
            <div className="btn">
              <span>2</span>
              <p>Вызовите курьера</p>
            </div>
            <div className="btn">
              <span>3</span>
              <p>Подготовьте отправление</p>
            </div>
          </div>
        </aside>
      </section>
      <section className="tracker">
        <aside className="img-aside">
          <img src={trackKuryer} alt="track-kuryer" />
        </aside>
        <aside className="content-aside">
          <div className="content">
            <h4>Трекер курьера </h4>
            <p>
              Nunc hendrerit cursus molestie interdum nulla nulla. Magna duis
              quis elit, rhoncus amet, eu duis condimentum purus. Eu sit
              dignissim ut ipsum vel scelerisque id ac. Turpis donec dolor
              vulputate et iaculis faucibus. Tempus urna enim maecenas feugiat
              amet, ultricies sit massa. Vestibulum erat.
            </p>
          </div>
        </aside>
      </section>
      <section className="slider-section">
        <h4 className="section-title">Часто задаваемые вопросы</h4>
        <div className="slider-container">
          <div className="sliders">
            <div className="slider active">
              <div className="description">
                <div className="description-title">
                  <p> Leo eu donec nibh morbi magna tellus?</p>
                  <i>
                    <svg
                      width="7"
                      height="4"
                      viewBox="0 0 7 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.8225 0L3.5 2.47233L6.1775 0L7 0.761134L3.5 4L0 0.761134L0.8225 0Z"
                        fill="#2F2F38"
                      />
                    </svg>
                  </i>
                </div>
                <div className="description-content">
                  Sit tellus enim donec quis placerat scelerisque nibh nulla
                  tortor. Dis pulvinar velit elementum semper lobortis. Odio
                  quam cursus cursus sit elementum. Orci viverra congue interdum
                  ac ipsum venenatis, amet amet non. Enim egestas.
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="description">
                <div className="description-title">
                  <p> Leo eu donec nibh morbi magna tellus?</p>
                  <i>
                    <svg
                      width="7"
                      height="4"
                      viewBox="0 0 7 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.8225 0L3.5 2.47233L6.1775 0L7 0.761134L3.5 4L0 0.761134L0.8225 0Z"
                        fill="#2F2F38"
                      />
                    </svg>
                  </i>
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="description">
                <div className="description-title">
                  <p> Leo eu donec nibh morbi magna tellus?</p>
                  <i>
                    <svg
                      width="7"
                      height="4"
                      viewBox="0 0 7 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.8225 0L3.5 2.47233L6.1775 0L7 0.761134L3.5 4L0 0.761134L0.8225 0Z"
                        fill="#2F2F38"
                      />
                    </svg>
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="dots">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </section>
      <section className="download-app">
        <aside className="app-store-container">
          <div className="app-store">
            <h4>Теперь мы в App Store!</h4>
            <p>
              Magna egestas blandit ut ante. Fames quis orci nullam senectus
              laoreet tellus. Eu, quis sed dui justo, nibh justo. Sed justo,
              maecenas id mauris, aliquet adipiscing. Aenean dui tellus sodales
              hendrerit a praesent nec accumsan. Lectus tellus cras in nulla.
              Eget tellus urna molestie neque et ut. Pharetra semper eu magna
              amet ipsum ullamcorper elementum adipiscing. Volutpat morbi.
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
      <footer className="footer">
        <div className="logo">
          <h3>VELOKURYER </h3>
        </div>
        <nav className="contact">
          <div className="adress">
            <h5>Адресс</h5>
            <p>
              Lev Tolstoy küç., 133 <br />
              Bakı, AZ1005
            </p>
          </div>
          <div className="phone">
            <h5>Номер для связи</h5>
            <p>{"(+994 50)"} 202 17 52</p>
          </div>
        </nav>
        <div className="social-media">
          <div className="link-container">
            <h5>Приследуйте нас {":)"} </h5>
            <div className="link">
              <i>
                <svg
                  width="10"
                  height="21"
                  viewBox="0 0 10 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.17436 3.48674H10V0.148066C9.68518 0.102539 8.60167 0 7.34044 0C1.56394 0 3.13569 6.86889 2.90563 7.875H0V11.6078H2.90485V21H6.46629V11.6087H9.25357L9.69612 7.87582H6.46551C6.62214 5.40504 5.83118 3.48674 8.17436 3.48674Z"
                    fill="white"
                  />
                </svg>
              </i>
              <i>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5039 5.10767C7.52616 5.10767 5.11568 7.52098 5.11568 10.4958C5.11568 13.4735 7.52904 15.8839 10.5039 15.8839C13.4816 15.8839 15.8921 13.4706 15.8921 10.4958C15.8921 7.51811 13.4788 5.10767 10.5039 5.10767ZM10.5039 13.9931C8.57083 13.9931 7.0065 12.4276 7.0065 10.4958C7.0065 8.56398 8.57206 6.99845 10.5039 6.99845C12.4357 6.99845 14.0013 8.56398 14.0013 10.4958C14.0021 12.428 12.437 13.9931 10.5039 13.9931Z"
                    fill="white"
                  />
                  <path
                    d="M14.8296 0.06697C12.8978 -0.0232626 8.11209 -0.018751 6.17862 0.06697C4.47934 0.146539 2.98063 0.556687 1.7719 1.76539C-0.247302 3.78455 0.0106867 6.50589 0.0106867 10.4966C0.0106867 14.5809 -0.21695 17.2391 1.7719 19.2283C3.7993 21.2548 6.56006 20.9895 10.5037 20.9895C14.5499 20.9895 15.9461 20.9919 17.3767 20.4382C19.3217 19.6831 20.79 17.9445 20.9336 14.8216C21.0246 12.8886 21.0193 8.10423 20.9336 6.1708C20.7605 2.48438 18.7819 0.249076 14.8296 0.06697ZM17.8878 17.892C16.5638 19.216 14.7271 19.0978 10.4783 19.0978C6.10315 19.0978 4.34891 19.1627 3.06881 17.8789C1.5943 16.4114 1.86131 14.0551 1.86131 10.4827C1.86131 5.64827 1.36502 2.16693 6.21717 1.91838C7.33198 1.879 7.6601 1.86588 10.466 1.86588L10.5054 1.89213C15.1684 1.89213 18.8266 1.40405 19.046 6.25488C19.0961 7.36187 19.1072 7.69409 19.1072 10.4958C19.1067 14.82 19.1888 16.5849 17.8878 17.892Z"
                    fill="white"
                  />
                  <path
                    d="M16.1058 6.1543C16.8012 6.1543 17.365 5.59056 17.365 4.89514C17.365 4.19973 16.8012 3.63599 16.1058 3.63599C15.4104 3.63599 14.8466 4.19973 14.8466 4.89514C14.8466 5.59056 15.4104 6.1543 16.1058 6.1543Z"
                    fill="white"
                  />
                </svg>
              </i>
              <i>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.9404 3.05197C15.9663 1.08486 13.341 0.00123047 10.5439 0C4.78069 0 0.089844 4.66799 0.0877834 10.4053C0.0869591 12.2395 0.568325 14.0298 1.48366 15.6077L0 21L5.54313 19.553C7.07047 20.3823 8.78987 20.8191 10.5398 20.8195H10.5443C16.3071 20.8195 20.9979 16.1511 21.0004 10.4135C21.0012 7.63301 19.9145 5.01867 17.9404 3.05197ZM10.5439 19.062H10.5402C8.98069 19.0612 7.45128 18.6445 6.11681 17.8566L5.79947 17.6691L2.51027 18.528L3.38811 15.3362L3.18122 15.0088C2.31122 13.632 1.85169 12.0401 1.85252 10.4061C1.85417 5.63719 5.7529 1.75752 10.5468 1.75752C12.8679 1.75834 15.0501 2.65904 16.6908 4.29393C18.3315 5.92881 19.2349 8.10182 19.234 10.413C19.2328 15.1819 15.3341 19.062 10.5439 19.062ZM15.311 12.5844C15.0497 12.454 13.7651 11.8252 13.5256 11.7387C13.2862 11.6517 13.1119 11.6087 12.9379 11.8687C12.7636 12.1287 12.2629 12.7144 12.1108 12.8879C11.9583 13.0614 11.8062 13.0832 11.545 12.9531C11.2837 12.8231 10.4417 12.5483 9.44392 11.6624C8.66747 10.9729 8.14283 10.1214 7.99035 9.86139C7.83827 9.60094 7.98911 9.47379 8.10492 9.33064C8.38764 8.98119 8.67077 8.61451 8.75814 8.44143C8.84551 8.26793 8.80183 8.11617 8.7363 7.98574C8.67118 7.85572 8.1486 6.57562 7.931 6.05514C7.71875 5.54818 7.50362 5.61668 7.34289 5.60889C7.19082 5.6015 7.01649 5.59986 6.84216 5.59986C6.66783 5.59986 6.38511 5.66467 6.14525 5.92512C5.9058 6.18557 5.23115 6.81434 5.23115 8.09402C5.23115 9.37371 6.1675 10.6103 6.29773 10.7838C6.42838 10.9573 8.13995 13.5836 10.7607 14.7098C11.3838 14.9781 11.8705 15.1376 12.2501 15.2578C12.8761 15.4559 13.4453 15.4276 13.8957 15.3608C14.3977 15.2861 15.4412 14.7316 15.6592 14.1246C15.8768 13.5171 15.8768 12.9966 15.8113 12.8879C15.7466 12.7796 15.5723 12.7144 15.311 12.5844Z"
                    fill="white"
                  />
                </svg>
              </i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
