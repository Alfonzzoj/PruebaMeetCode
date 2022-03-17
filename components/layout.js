import { motion } from "framer-motion";
import Navbar from "./navbar";
const Layout = ({ children }) => (
    <>

        <Navbar />

        <div className="col-12">

            <motion.div
                animate={{ y: 10 }}
                transition={{ ease: "easeOut", duration: 3 }}
                id="carouselExampleControlsNoTouching" className="carousel slide " data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active padre">
                        <img src="carr.png" className="d-block w-100" alt="..."></img>
                        <motion.div
                            animate={{ x: 20 }}
                            transition={{ ease: "easeOut", duration: 2 }}
                        >

                            <h2 class="card-title f-pri">El secreto<br></br> de tu cocina</h2>
                            <img src="paint-yellow.png" className="pintura" ></img>
                        </motion.div>

                    </div>
                </div>


            </motion.div>
        </div>
        <main className="container py-5">
            {children}
        </main>
    </>

)
export default Layout;