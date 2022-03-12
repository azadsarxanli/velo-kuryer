import { useEffect } from "react";
import { gsap, Elastic } from "gsap";

function HeaderSection() {
  useEffect(() => {
    gsap.to("body", 0, { visibility: "visible" });
    gsap.from(".rent", 1.2, { x: -200, ease: Elastic });
    gsap.from(".rent-adress", 1.2, { x: 200 });
  });
  return (
    <section className="rent-section">
      <aside className="rent">
        <div className="rent-container">
          <h4 className="rent-header">
            Экологичная <br /> доставка в Баку
          </h4>
          <p className="rent-description">
            Natoque et ut orci malesuada molestie. Tellus mi dis neque, nisi.
            Sit luctus lacus urna, non scelerisque porta. Turpis diam aliquam
            volutpat faucibus suspendisse.{" "}
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
  );
}

export default HeaderSection;
