import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import styles from "./Home.module.css";

const Home = ({ data }) => {
 
  return (
    <section className={styles.container}>
      <Header />
      <div className={styles.productContainer}>
        {data &&
          data.map((product) => (
            <Link className={styles.link} to={`produto/${product.id}`}>
              <Product
              key={product.id}
              image={product.fotos[0].src}
              name={product.nome}
            />
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Home;
