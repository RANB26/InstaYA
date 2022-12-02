import { Link } from 'react-router-dom';

function Error_usuario() {
    return (
        <div>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="fixed-top">
              <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><Link to="/">InstaYA</Link></h1>
                {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                {/* <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

                <nav id="navbar" className="navbar">
                  <ul>
										<li><Link className="nav-link scrollto" to="/usuario/crearenvio">Crear envío</Link></li>
										<li><Link className="nav-link scrollto" to="/usuario/envios">Mis envíos</Link></li>
										<li><Link className="nav-link scrollto" to="/usuario/error">Informar error</Link></li>
										<li><Link className="nav-link scrollto" to="/usuario/perfil">Mi perfil</Link></li>
										<li><Link className="getstarted scrollto" to="/">Cerrar sesión</Link></li>
                  </ul>
                  <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>{/* <!-- .navbar --> */}

              </div>
            </header>{/* <!-- End Header --> */}

            <main id="main">
              <section className="section-bg mt-4">
                <div className="container">

                  <div className="section-title">
                    <span>Informar error</span>
                    <h2>Informar error</h2>
                    <p>En este aparatado puede enviarnos cualquier error ocurrido</p>
                  </div>

                    <div className="col-lg-12 col-md-12 px-5">
                      <div className="contact">
                        <form action="" method="post" role="form" className="php-email-form">
                          <div className="row">
                            <div className="form-group col-md-6">
                              <label>Nombres y Apellidos</label>
                              <input type="text" name="nombres_apellidos" className="form-control" id="nombres_apellidos" required/>
                            </div>
                            <div className="form-group col-md-6 mt-3 mt-md-0">
                              <label>Correo electrónico</label>
                              <input type="email" className="form-control" name="email" id="email" required/>
                            </div>
                          </div>
                          <div className="form-group mt-3">
                            <label>Asunto</label>
                            <input type="text" className="form-control" name="asunto" id="asunto" required/>
                          </div>
                          <div className="form-group mt-3">
                            <label>Descripción del problema</label>
                            <textarea className="form-control" name="descripcion" rows="10" required></textarea>
                          </div>
                          <div className="text-center mt-3"><button type="submit">Enviar reporte</button></div>
                        </form>
                      </div>
                    </div>
                </div>
              </section>{/* <!-- End Services Section --> */}

            </main>{/* <!-- End #main --> */}

            {/* <!-- ======= Footer ======= --> */}
            <footer id="footer">

              <div className="container footer-bottom clearfix">
                <div className="copyright">
                  &copy; Copyright <strong><span>InstaYA</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </footer>{/* <!-- End Footer --> */}
        </div>
    );
}

export default Error_usuario;