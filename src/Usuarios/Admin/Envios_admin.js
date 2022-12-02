import { Link } from 'react-router-dom';

function Envios_admin() {
    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><Link to="/">InstaYA</Link></h1>
                {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                {/* <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link className="nav-link scrollto" to="/admin/envios">Envíos</Link></li>
                        <li><Link className="nav-link scrollto " to="/admin/usuarios">Usuarios</Link></li>
                        <li><Link className="nav-link scrollto" to="/admin/repartidores">Repartidores</Link></li>
                        <li><Link className="nav-link scrollto" to="/admin/perfil">Mi perfil</Link></li>
                        <li><Link className="getstarted scrollto" to="/">Cerrar sesión</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>{/* <!-- .navbar --> */}

                </div>
            </header>{/* <!-- End Header --> */}

            <main id="main">
                <section className="contact mt-4">
                <div className="container">

                    <div className="section-title">
                    <span>Envíos en la app</span>
                    <h2>Envíos en la app</h2>
                    <p>Aquí encontrará todos los envíos realizados en la aplicación</p>
                    </div>
                    <div className="icon-box text-center" style={{borderTop: '3px solid #16df7e', borderBottom: '3px solid #16df7e', padding: '20px', backgroundColor: '#f9f9fa'}}>
                    <p><h4>Guardados o en proceso <i className="bi bi-arrow-repeat"></i></h4></p>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Codigo de envío</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Repartidor</th>
                            <th scope="col">Opciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">12345</th>
                            <td>Ejemplo</td>
                            <td>20-11-2022</td>
                            <td>Ejemplo1</td>
                            <td>
                                <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                                <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-trash-fill"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">12345</th>
                            <td>Ejemplo</td>
                            <td>20-11-2022</td>
                            <td>Ejemplo1</td>
                            <td>
                                <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                                <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-trash-fill"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">12345</th>
                            <td>Ejemplo</td>
                            <td>20-11-2022</td>
                            <td>Ejemplo1</td>
                            <td>
                                <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                                <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-trash-fill"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">12345</th>
                            <td>Ejemplo</td>
                            <td>20-11-2022</td>
                            <td>Ejemplo1</td>
                            <td>
                                <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
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
                            <th scope="col">Usuario</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Repartidor</th>
                            <th scope="col">Más información</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">12345</th>
                            <td>Ejemplo</td>
                            <td>20-11-2022</td>
                            <td>Ejemplo1</td>
                            <td><button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button></td>
                        </tr>
                        <tr>
                            <th scope="row">12345</th>
                            <td>Ejemplo</td>
                            <td>20-11-2022</td>
                            <td>Ejemplo1</td>
                            <td><button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button></td>
                        </tr>
                        <tr>
                            <th scope="row">12345</th>
                            <td>Ejemplo</td>
                            <td>20-11-2022</td>
                            <td>Ejemplo1</td>
                            <td><button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button></td>
                        </tr>
                        <tr>
                            <th scope="row">12345</th>
                            <td>Ejemplo</td>
                            <td>20-11-2022</td>
                            <td>Ejemplo1</td>
                            <td><button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button></td>
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
            </footer>
        </div>
        
    );
}

export default Envios_admin;