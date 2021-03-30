import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import { basicFetch } from "./services/ranekApi.js";

function App() {
  const [data, setData] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await basicFetch();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <img
          style={{ width: "50px", marginTop: "50px" }}
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          alt="loading"
        />
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={data && <Home data={data} />} />
          <Route path="contato" element={<Contact />} />
          <Route path="produto/:id" element={<ProductDescription />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <p
          style={{
            textAlign: "center",
            fontFamily: "roboto",
            color: "#bbb",
            fontSize: "14px",
          }}
        >
          Alguns direitos reservados
        </p>
      </footer>
    </>
  );
}

export default App;
