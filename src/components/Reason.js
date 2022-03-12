import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Reason() {
  gsap.registerPlugin(ScrollTrigger);

  const reasonRef = useRef();
  useEffect(() => {
    console.log(reasonRef.current);
    gsap.from(".reason-description", {
      xPercent: -100,
      delay: 0.6,
      duration: 1,
      opacity: 0,
      ease: Power3,
      scrollTrigger: {
        trigger: reasonRef.current,
        markers: true,
      },
    });
    gsap.from(".reason-btns", {
      xPercent: 100,
      delay: 0.6,
      duration: 1,
      opacity: 0,
      ease: Power3,
      scrollTrigger: {
        trigger: reasonRef.current,
        markers: true,
      },
    });
  }, []);

  return (
    <section className="reason-order" ref={reasonRef}>
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
  );
}

export default Reason;
