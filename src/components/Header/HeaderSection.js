import { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import Btns from "./Btns.json";

function HeaderSection() {
  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  const [toggleKilogram, setToggleKilogram] = useState(Btns.kilogram);
  const [toggleHour, settoggleHour] = useState(Btns.hour);
  const rentRef = useRef();
  const rentAdressRef = useRef();
  useEffect(() => {
    gsap.to("body", 0, { visibility: "visible", ease: Power3 });
    gsap.from(rentRef.current, 1.2, { x: -200, opacity: 0, ease: Power3 });
    gsap.from(rentAdressRef.current, 1.2, { x: 200, opacity: 0, ease: Power3 });
  }, []);
  const secretRef = useRef();
  const toggleKilogramButton = (event) => {
    setToggleKilogram(
      toggleKilogram.filter((item, index) => {
        if (event.target.className === `active-${index}`) {
          secretRef.current.className = `secret active-${index}`;
          secretRef.current.textContent = item.text;
        }
        return item;
      })
    );
  };
  const hourRef = useRef();
  const toggleHourButton = (event) => {
    settoggleHour(
      toggleHour.filter((item, index) => {
        if (event.target.className === `active-${index}`) {
          hourRef.current.className = `secret active-${index}`;
          hourRef.current.textContent = item.text;
        }
        return item;
      })
    );
  };

  const fromRef = useRef();
  const orderClickHandler = () => {
    fromRef.current.focus();
  };

  const localStorageInputs = localStorage.getItem("inputs");
  const INITIAL_STATE = {
    from: "",
    to: "",
  };
  const [inputs, setInputs] = useState(
    JSON.parse(localStorageInputs) || INITIAL_STATE
  );
  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs]);
  const inputHandler = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const [alert, setAlert] = useState(false);
  const submitButtonHandler = () => {
    const isTyping = inputs.from.length > 0 && inputs.to.length > 0;
    if (!isTyping) {
      setAlert(true);
    } else {
      setAlert(false);
      setForm(false);
      setAccept(true);
    }
  };

  const [form, setForm] = useState(true);
  const [accept, setAccept] = useState(false);
  const [numAccept, setNumAccept] = useState(false);
  const acceptOrder = () => {
    console.log("helo");
    setAccept(false);
    setNumAccept(true);
  };

  const localPrivateDetails = localStorage.getItem("privateDetails");
  const DUMB_VALUE = {
    name: "",
    lastname: "",
    numberPrefix: "",
    phone: "",
  };
  const [privateDetail, setPrivateDetail] = useState(
    JSON.parse(localPrivateDetails) || DUMB_VALUE
  );
  useEffect(() => {
    localStorage.setItem("privateDetails", JSON.stringify(privateDetail));
  }, [privateDetail]);

  //? local storage for name surname and phone number
  const privateDetailHandler = (event) => {
    setPrivateDetail((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(event.target.value);
  };

  return (
    <section className="rent-section">
      <aside ref={rentRef} className="rent">
        <div className="rent-container">
          <h4 className="rent-header">
            Экологичная <br /> доставка в Баку
          </h4>
          <p className="rent-description">
            Natoque et ut orci malesuada molestie. Tellus mi dis neque, nisi.
            Sit luctus lacus urna, non scelerisque porta. Turpis diam aliquam
            volutpat faucibus suspendisse.{" "}
          </p>
          <button
            onClick={orderClickHandler}
            type="button"
            className="btn-green"
          >
            Заказать доставку
          </button>
        </div>
      </aside>
      <aside ref={rentAdressRef} className="rent-adress">
        <form onSubmit={onSubmitForm} action="#">
          {form && (
            <div>
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
                <input
                  placeholder="Откуда"
                  type="text"
                  ref={fromRef}
                  onChange={inputHandler}
                  name="from"
                  value={inputs.from}
                  id=""
                />
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
                <input
                  placeholder="Куда"
                  type="text"
                  name="to"
                  onChange={inputHandler}
                  value={inputs.to}
                  id=""
                />
              </div>
              <div className="kilogram-amount">
                {toggleKilogram.map((btn, index) => (
                  <button
                    type="button"
                    className={`active-${index}`}
                    onClick={toggleKilogramButton}
                    key={btn.id}
                  >
                    {btn.text}
                  </button>
                ))}
                <div ref={secretRef} className="secret active-0">
                  до 10 кг
                </div>
              </div>
              <div className="hour">
                {toggleHour.map((btn, index) => (
                  <button
                    type="button"
                    className={`active-${index}`}
                    onClick={toggleHourButton}
                    key={btn.id}
                  >
                    {btn.text}
                  </button>
                ))}
                <div ref={hourRef} className="secret active-0">
                  за 3 часа
                </div>
              </div>
              <button
                onClick={submitButtonHandler}
                type="submit"
                className="rent-submit"
              >
                Рассчитать стимость
              </button>
            </div>
          )}
          {accept && (
            <div className="accept-container">
              <h4>Стоимость ващего заказа: 5.99 АЗН</h4>
              <button onClick={acceptOrder} className="btn-green">
                Заказать доставку
              </button>
            </div>
          )}
          {numAccept && (
            <div className="name-surname-container">
              <div className="input">
                <input
                  name="name"
                  value={privateDetail.name}
                  onChange={privateDetailHandler}
                  type="text"
                  placeholder="Имя"
                />
              </div>
              <div className="input">
                <input
                  name="lastname"
                  onChange={privateDetailHandler}
                  value={privateDetail.lastname}
                  type="text"
                  placeholder="Фамилия"
                />
              </div>
              <div className="input">
                <select
                  name="numberPrefix"
                  onChange={privateDetailHandler}
                  value={privateDetail.numberPrefix}
                  id="numbers"
                >
                  <option value="050">050</option>
                  <option value="055">055</option>
                  <option value="070">070</option>
                  <option value="077">077</option>
                </select>
                <input
                  value={privateDetail.phone}
                  onChange={privateDetailHandler}
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Номер для связи"
                />
              </div>
              <div className="btngr">
                {" "}
                <button className="btn-green">Подтвердить</button>
              </div>
            </div>
          )}
        </form>
      </aside>

      <div className={alert ? "default active" : "default"}>
        Пожалуйста, заполните все поля
      </div>
    </section>
  );
}

export default HeaderSection;
