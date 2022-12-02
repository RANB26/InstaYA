import { Link } from 'react-router-dom';

function Usuarios_admin() {
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
                <section id="contact" className="contact mt-3">
                <div className="container">

                    <div className="section-title">
                    <span>Usuarios de la aplicación</span>
                    <h2>Usuarios de la aplicación</h2>
                    <p>En este apartado puede administrar todos los usuarios</p>
                    </div>

                    <div className="icon-box text-center" style={{borderTop: '3px solid #16df7e', borderBottom: '3px solid #16df7e', padding: '20px', backgroundColor: '#f9f9fa'}}>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">ID</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Correo electrónico</th>
                            <th scope="col">Opciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">12345</th>
                            <td>12345678</td>
                            <td>Ejemplo</td>
                            <td>Ejemplo</td>
                            <td>310 748 2535</td>
                            <td>ejemplo@gmail.com</td>
                            <td>
                                <button type="button" className="btn btn-primary btn-circle"><i className="bi bi-pencil-square"></i></button>
                                <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-trash-fill"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">12345</th>
                            <td>12345678</td>
                            <td>Ejemplo</td>
                            <td>Ejemplo</td>
                            <td>310 748 2535</td>
                            <td>ejemplo@gmail.com</td>
                            <td>
                                <button type="button" className="btn btn-primary btn-circle"><i className="bi bi-pencil-square"></i></button>
                                <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-trash-fill"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">12345</th>
                            <td>12345678</td>
                            <td>Ejemplo</td>
                            <td>Ejemplo</td>
                            <td>310 748 2535</td>
                            <td>ejemplo@gmail.com</td>
                            <td>
                                <button type="button" className="btn btn-primary btn-circle"><i className="bi bi-pencil-square"></i></button>
                                <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-trash-fill"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">12345</th>
                            <td>12345678</td>
                            <td>Ejemplo</td>
                            <td>Ejemplo</td>
                            <td>310 748 2535</td>
                            <td>ejemplo@gmail.com</td>
                            <td>
                                <button type="button" className="btn btn-primary btn-circle"><i className="bi bi-pencil-square"></i></button>
                                <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-trash-fill"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">12345</th>
                            <td>12345678</td>
                            <td>Ejemplo</td>
                            <td>Ejemplo</td>
                            <td>310 748 2535</td>
                            <td>ejemplo@gmail.com</td>
                            <td>
                                <button type="button" className="btn btn-primary btn-circle"><i className="bi bi-pencil-square"></i></button>
                                <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-trash-fill"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">12345</th>
                            <td>12345678</td>
                            <td>Ejemplo</td>
                            <td>Ejemplo</td>
                            <td>310 748 2535</td>
                            <td>ejemplo@gmail.com</td>
                            <td>
                                <button type="button" className="btn btn-primary btn-circle"><i className="bi bi-pencil-square"></i></button>
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

export default Usuarios_admin;