import React from "react";
import { useParams } from "react-router";
import { productFetch } from "../../services/ranekApi.js";
import Head from "../Head/Head.js";
import Header from "../Header/Header.js";
import styles from "./ProductDescription.module.css";

const ProductDescription = () => {
  const params = useParams();
  const [dataProduct, setDataProduct] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const dataProduct = await productFetch(params.id);
      setDataProduct(dataProduct);
      setLoading(false);
    };
    fetchProduct();
  }, [params.id]);

  return (
    <section className={styles.container}>
      <Head
        title={`Ranek | ${dataProduct && dataProduct.nome}`}
        description="Página de produtos"
      />
      <Header />
      {loading && (
        <img
          style={{ width: "50px", marginTop: "50px" }}
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          alt="loading"
        />
      )}
      {dataProduct && (
        <div className={styles.productContent}>
          <div className={styles.productImage}>
            {dataProduct.fotos.map((image) => (
              <img
                style={{ marginBottom: "20px" }}
                src={image.src}
                alt={image.titulo}
              />
            ))}
          </div>
          <div className={styles.productDescription}>
            <h2>{dataProduct.nome}</h2>
            <p className={styles.productPrice}>R$: {dataProduct.preco}</p>
            <p>{dataProduct.descricao}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDescription;
