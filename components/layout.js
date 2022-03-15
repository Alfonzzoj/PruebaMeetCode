import Navbar from "./navbar";
const Layout = ({ children }) => (
    <>

        <Navbar />

        <div className="col-12">

            <div id="carouselExampleControlsNoTouching" className="carousel slide " data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active padre">
                        <img src="carr.png" className="d-block w-100" alt="..."></img>
                        <h2 class="card-title f-pri">El secreto<br></br> de tu cocina</h2>
                        <img src="paint-yellow.png" className="pintura" ></img>

                    </div>
                </div>


            </div>
        </div>
        <main className="container py-5">
            {children}
        </main>
    </>

)
export default Layout;