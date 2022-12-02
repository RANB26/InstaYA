import { Link } from 'react-router-dom';

function Perfil_usuario() {
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
							<section id="contact" className="contact mt-3">
								<div className="container">

									<div className="section-title">
										<span>Usuario</span>
										<h2>Usuario</h2>
										<p>Usted puede realizar envíos y consultar el historial de estos</p>
									</div>

									<div className="row">

										<div className="col-lg-5 d-flex align-items-stretch">
											<div className="info">

												<div className="nombres">
													<i className="bi bi-person"></i>
													<h4>Nombres:</h4>
													<p>Primer Nombre Segundo Nombre</p>
												</div>

												<div className="apellidos">
													<i className="bi bi-person"></i>
													<h4>Apellidos:</h4>
													<p>Primer Apellido Segundo Apellido</p>
												</div>

												<div className="telefono">
													<i className="bi bi-phone"></i>
													<h4>Teléfono:</h4>
													<p>+57 310 489 2535</p>
												</div>

												<div className="edad">
													<i className="bi bi-person-plus"></i>
													<h4>Edad:</h4>
													<p>18</p>
												</div>

												<div className="email">
													<i className="bi bi-envelope"></i>
													<h4>Email:</h4>
													<p>info@example.com</p>
												</div>

												<div className="direccion">
													<i className="bi bi-geo-alt"></i>
													<h4>Dirección:</h4>
													<p>A108 Adam Street, New York</p>
												</div>
												
											</div>

										</div>

										<div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
											<form action="" method="post" role="form" className="php-email-form">
													<div className="text-center"><h2>Actualizar datos</h2></div>
													<div className="form-group my-3">
														<label>Nombres</label>
														<input type="text" name="nombres" className="form-control" id="nombres-ac" required/>
													</div>

													<div className="form-group my-3">
														<label>Apellidos</label>
														<input type="text" name="apellidos" className="form-control" id="apellidos-ac" required/>
													</div>

												<div className="row my-3">
													<div className="form-group col-md-7">
														<label>Teléfono</label>
														<input type="number" name="telefono" className="form-control" id="telefono-ac" required/>
													</div>
						
													<div className="form-group col-md-5">
														<label>Edad</label>
														<input type="number" name="edad" className="form-control" id="edad-ac" required/>
													</div>
												</div>

												<div className="row my-3">
													<div className="form-group col-md-6">
														<label>Email</label>
														<input type="email" className="form-control" name="email" id="email-ac" required/>
													</div>
						
													<div className="form-group col-md-6">
														<label>Dirección</label>
														<input type="text" className="form-control" name="direccion" id="direccion-ac" required/>
													</div>
												</div>

												<div className="text-center my-3"><button type="submit">Actualizar</button></div>
											</form>
										</div>

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

export default Perfil_usuario;