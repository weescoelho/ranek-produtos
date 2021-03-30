import React from "react";
import Header from "../../components/Header/Header";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={style.container}>
      <Header />
      <div className={style.contentContainer}>
        <div>
          <img
            src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartphone-2.jpg"
            alt=""
          />
        </div>
        <div class={style.contentDescription}>
          <h2>Entre em contato</h2>
          <p>weslley@origamid.com</p>
          <p>99999-9999</p>
          <p>Rua Ali Perto, 999</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
