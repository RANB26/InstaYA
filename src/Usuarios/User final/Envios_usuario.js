import { Link } from 'react-router-dom';

function Envios_usuario() {
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
              <section className="services section-bg mt-4">
                <div className="container">

                  <div className="section-title">
                    <span>Mis envíos</span>
                    <h2>Mis envíos</h2>
                    <p>Aquí podrás ver todos tus envíos reslizados y su estado actual</p>
                  </div>
                  <div className="icon-box" style={{borderTop: '3px solid #16df7e', borderBottom: '3px solid #16df7e', padding: '20px', backgroundColor: '#f9f9fa'}}>
                    <p><h4>Guardados o en proceso <i className="bi bi-arrow-repeat"></i></h4></p>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Codigo de envío</th>
                          <th scope="col">Nombre y apellido</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Persona a entregar</th>
                          <th scope="col">Dirección de envío</th>
                          <th scope="col">Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">12345</th>
                          <td>Ejemplo Ejemplo1</td>
                          <td>20-11-2022</td>
                          <td>Ejemplo Ejemplo1</td>
                          <td>Carrera 14B #76-56</td>
                          <td>
                            <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                            <button type="button" className="btn btn-primary btn-circle"><i className="bi bi-pencil-square"></i></button>
                            <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-trash-fill"></i></button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">12345</th>
                          <td>Ejemplo Ejemplo1</td>
                          <td>20-11-2022</td>
                          <td>Ejemplo Ejemplo1</td>
                          <td>Carrera 14B #76-56</td>
                          <td>
                            <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                            <button type="button" className="btn btn-primary btn-circle"><i className="bi bi-pencil-square"></i></button>
                            <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-trash-fill"></i></button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">12345</th>
                          <td>Ejemplo Ejemplo1</td>
                          <td>20-11-2022</td>
                          <td>Ejemplo Ejemplo1</td>
                          <td>Carrera 14B #76-56</td>
                          <td>
                            <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                            <button type="button" className="btn btn-primary btn-circle"><i className="bi bi-pencil-square"></i></button>
                            <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-trash-fill"></i></button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">12345</th>
                          <td>Ejemplo Ejemplo1</td>
                          <td>20-11-2022</td>
                          <td>Ejemplo Ejemplo1</td>
                          <td>Carrera 14B #76-56</td>
                          <td>
                            <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                            <button type="button" className="btn btn-primary btn-circle"><i className="bi bi-pencil-square"></i></button>
                            <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-trash-fill"></i></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br/><br/>
                    <p><h4 className="text-success">Cumplidos <i className="bi bi-check-lg"></i></h4></p>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Codigo de envío</th>
                          <th scope="col">Nombre y apellido</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Persona a entregar</th>
                          <th scope="col">Dirección de envío</th>
                          <th scope="col">Más información</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">12345</th>
                          <td>Ejemplo Ejemplo1</td>
                          <td>20-11-2022</td>
                          <td>Ejemplo Ejemplo1</td>
                          <td>Carrera 14B #76-56</td>
                          <td><button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button></td>
                        </tr>
                        <tr>
                          <th scope="row">12345</th>
                          <td>Ejemplo Ejemplo1</td>
                          <td>20-11-2022</td>
                          <td>Ejemplo Ejemplo1</td>
                          <td>Carrera 14B #76-56</td>
                          <td><button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button></td>
                        </tr>
                        <tr>
                          <th scope="row">12345</th>
                          <td>Ejemplo Ejemplo1</td>
                          <td>20-11-2022</td>
                          <td>Ejemplo Ejemplo1</td>
                          <td>Carrera 14B #76-56</td>
                          <td><button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button></td>
                        </tr>
                        <tr>
                          <th scope="row">12345</th>
                          <td>Ejemplo Ejemplo1</td>
                          <td>20-11-2022</td>
                          <td>Ejemplo Ejemplo1</td>
                          <td>Carrera 14B #76-56</td>
                          <td><button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button></td>
                        </tr>
                      </tbody>
                    </table>
                    <br/><br/>
                    <p><h4 className="text-danger">Cancelados <i className="bi bi-x-lg"></i></h4></p>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Codigo de envío</th>
                          <th scope="col">Nombre y apellido</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Persona a entregar</th>
                          <th scope="col">Dirección de envío</th>
                          <th scope="col">Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">12345</th>
                          <td>Ejemplo Ejemplo1</td>
                          <td>20-11-2022</td>
                          <td>Ejemplo Ejemplo1</td>
                          <td>Carrera 14B #76-56</td>
                          <td>
                            <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                            <button type="button" className="btn btn-success btn-circle"><i className="bi bi-arrow-up"></i></button>
                            <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-trash-fill"></i></button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">12345</th>
                          <td>Ejemplo Ejemplo1</td>
                          <td>20-11-2022</td>
                          <td>Ejemplo Ejemplo1</td>
                          <td>Carrera 14B #76-56</td>
                          <td>
                            <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                            <button type="button" className="btn btn-success btn-circle"><i className="bi bi-arrow-up"></i></button>
                            <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-trash-fill"></i></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

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

export default Envios_usuario;