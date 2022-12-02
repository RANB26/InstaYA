import { Link } from 'react-router-dom';

function CrearEnvio_usuario() {
    return (
        <div>
            {/* --> ======= Header ======= --> */}
			<header id="header" className="fixed-top">
				<div className="container d-flex align-items-center justify-content-between">

					<h1 className="logo"><Link to="/">InstaYA</Link></h1>
					{/* --> Uncomment below if you prefer to use an image logo --> */}
					{/* --> <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

					<nav id="navbar" className="navbar">
						<ul>
							<li><Link className="nav-link scrollto" to="/usuario/crearenvio">Crear envío</Link></li>
							<li><Link className="nav-link scrollto" to="/usuario/envios">Mis envíos</Link></li>
							<li><Link className="nav-link scrollto" to="/usuario/error">Informar error</Link></li>
							<li><Link className="nav-link scrollto" to="/usuario/perfil">Mi perfil</Link></li>
							<li><Link className="getstarted scrollto" to="/">Cerrar sesión</Link></li>
						</ul>
						<i className="bi bi-list mobile-nav-toggle"></i>
					</nav>{/* --> .navbar --> */}

				</div>
			</header>{/* --> End Header --> */}

			<main id="main">
				<section className="section-bg mt-4">
					<div className="container">

						<div className="section-title">
							<span>Nuevo envío</span>
							<h2>Nuevo envío</h2>
						</div>
						<div className="col-lg-12 col-md-12 px-5">
							<div className="contact">
								<form action="" method="post" role="form" className="php-email-form">
									<div className="row">
										<h5 className="mb-3"><b>Persona que envía (Usuario)</b></h5>
										<div className="form-group col-md-6">
											<label>Identificación personal</label>
											<input type="number" name="identificacion" className="form-control" id="identificacion" required/>
										</div>
										<div className="form-group col-md-6">
											<label>Nombre completo</label>
											<input type="text" className="form-control" name="nombre_c" id="nombre_c" required/>
										</div>
									</div>
									<div className="row mt-5">
										<h5 className="mb-3"><b>Información para atender al personal</b></h5>
										<div className="form-group col-md-6">
											<label>Fecha y hora</label>
											<input type="datetime-local" name="fecha" className="form-control" id="fecha" required/>
										</div>
										<div className="form-group col-md-6 mt-3 mt-md-0">
											<div className="row">
												<div className="col-md-6">
													<label>Ciudad</label>
													<input type="text" className="form-control" name="ciudad" id="ciudad" required/>
												</div>
												<div className="col-md-6">
													<label>Dirección</label>
													<input type="text" className="form-control" name="direccion" id="direccion" required/>
												</div>
											</div>
										</div>
									</div>
									<div className="row mt-5">
										<div className="form-group col-md-6">
											<h5 className="mb-3"><b>Información del paquete</b></h5>
											<div className="row">
												<div className="col-md-6">
													<label>Peso (KG)</label>
													<input type="number" className="form-control" name="peso" id="peso" required/>
												</div>
												<div className="col-md-6">
													<label>¿Contenido delicado?</label>
													<select className="form-control" name="c_delicado" id="c_delicado">
														<option value="si">Si</option>
														<option value="no">No</option>
													</select>
												</div>
											</div>
										</div>
										<div className="form-group col-md-6 mt-3 mt-md-0">
											<h5 className="mb-3"><b>Dimensiones (cm)</b></h5>
											<div className="row">
												<div className="col-md-4">
													<label>Ancho</label>
													<input type="number" className="form-control" name="ancho" id="ancho" required/>
												</div>
												<div className="col-md-4">
													<label>Alto</label>
													<input type="number" className="form-control" name="alto" id="alto" required/>
												</div>
												<div className="col-md-4">
													<label>Largo</label>
													<input type="number" className="form-control" name="largo" id="largo" required/>
												</div>
											</div>
										</div>
									</div>
									<div className="row mt-5">
										<h5 className="mb-3"><b>Persona que recibe</b></h5>
										<div className="form-group col-md-6">
											<label>Identificación personal</label>
											<input type="number" name="identificacion_r" className="form-control" id="identificacion_r" required/>
										</div>
										<div className="form-group col-md-6">
											<label>Nombre completo</label>
											<input type="text" className="form-control" name="nombre_cr" id="nombre_cr" required/>
										</div>
										<div className="form-group col-md-6">
											<label>Ciudad</label>
											<input type="text" className="form-control" name="ciudad_r" id="ciudad_r" required/>
										</div>
										<div className="form-group col-md-6">
											<label>Dirección</label>
											<input type="text" className="form-control" name="direccion_r" id="direccion_r" required/>
										</div>
									</div>
									<div className="text-center mt-5"><button type="submit">Enviar paquete</button></div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>{/* --> End #main --> */}

			{/* --> ======= Footer ======= --> */}
			<footer id="footer">

				<div className="container footer-bottom clearfix">
					<div className="copyright">
						&copy; Copyright <strong><span>InstaYA</span></strong>. All Rights Reserved
					</div>
					<div className="credits">
						Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
					</div>
				</div>
			</footer>{/* --> End Footer --> */}
        </div>
    );
}

export default CrearEnvio_usuario;