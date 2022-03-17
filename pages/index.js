// import { props } from "../props";
import { motion } from "framer-motion";
import Layout from "../components/layout";
const Index = ({ articles }) => {
  // console.log(props.articles);
  return (
    <Layout>
      {/* Seccion 2: Nuestros articulos */}
      <motion.div
        animate={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}

        className="contenedor">
        <img src="paint-yellow.png" className="img-fluid w-50 opacity-25" />
        <div className="centrado  text-center f-pri">Nuestros articulos</div>
      </motion.div>

      <div className="row py-5">
        <div className="col-md-3">
          <div className="btn-group-vertical col-12 py-4  ">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"></input>
            <label className="btn text-warning text-start fw-bold f-sec fs-6" for="btnradio1">
              TODOS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-right-short me-auto "
                viewBox="0 0 16 16"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </label>

            <input type="radio" className="btn-check " name="btnradio" id="btnradio2" autocomplete="off"></input>
            <label className="btn text-start fw-bold f-sec fs-6" for="btnradio2 ">
              PRODUCTOS
            </label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"></input>
            <label className="btn text-start fw-bold f-sec fs-6" for="btnradio3">
              RECETAS
            </label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off"></input>
            <label className="btn text-start fw-bold f-sec fs-6" for="btnradio4">
              CONSEJOS
            </label>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            {/* List Item Experience */}
            {articles.map(({ title, content, image }, index) => (
              <div className="col-md-4 col-sm-6 py-4" key={index}>
                <motion.div animate={{ x: 100 }}
                  transition={{ ease: "easeOut", duration: 2 }} className="card shadow p-3 mb-1 bg-body rounded h-100">
                  <div className="overflow">
                    <img className="img-fluid  card-img-top" src={image} alt="card" />
                  </div>
                  <div className="card-body f-sec">
                    <h5>{title}</h5>
                    <p className="text-secondary">{content}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seccion: Contactanos */}
      <div className="contenedor">
        <img src="paint-yellow.png" className="img-fluid w-50 opacity-25" />
        <div className="centrado  text-center f-pri">Contáctanos</div>
      </div>
      <div className="container col-8 f-sec fw-bold">
        <form action="/send-data" className="row g-3" method="POST">
          <div className="col-md-6">
            <label for="inputName" className="form-label">
              NOMBRE
            </label>
            <input type="text" className="form-control" id="inputName" name="firstname" required></input>
          </div>
          <div className="col-md-6">
            <label for="inputLName" className="form-label">
              APELLIDO
            </label>
            <input type="password" className="form-control" id="inputLName" name="lastname" required></input>
          </div>
          <div className="col-md-6">
            <label for="inputEmail" className="form-label">
              MAIL
            </label>
            <input type="email" className="form-control" id="inputEmail" name="email" required></input>
          </div>
          <div className="col-md-6">
            <label for="inputCellphone" className="form-label">
              TELEFONO
            </label>
            <input type="tel" className="form-control" id="inputCellphone" name="phone" pattern="[0-9]{9}" required></input>
          </div>

          <div className="row justify-content-end p-3">
            <div className="col-2 ">
              <button type="submit" className="btn btn-warning ms-auto">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout >

  );
};
export async function getServerSideProps() {
  const res = await fetch(
    "https://5eed24da4cbc340016330f0d.mockapi.io/api/articles"
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      articles: data,
    },
  };
}
export default Index;
