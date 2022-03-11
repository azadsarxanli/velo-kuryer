import "./reset.scss";
import "./App.scss";
import mapImage from "./assets/images/map-first.png";
import trackKuryer from "./assets/images/velokuryer-tracking-iphone.png";

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
              <button className="btn-green">Заказать доставку</button>
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
                <button className="active">до 5 кг</button>
                <button>до 10 кг</button>
                <button>до 20 кг</button>
              </div>
              <div className="hour">
                <button>за 3 часа</button>
                <button>за 24 часа</button>
                <button>за 48 часа</button>
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
            <button className="active">зона А</button>
            <button>зона Б</button>
            <button>зона C</button>
          </div>
          <div className="hour">
            <button>за 3 часа</button>
            <button>за 24 часа</button>
            <button>за 48 часа</button>
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
            <button className="btn-green">Заказать доставку</button>
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
    </div>
  );
}

export default App;
