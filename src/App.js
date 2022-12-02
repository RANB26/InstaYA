import { Link } from 'react-router-dom';

function App() {
	return (
	<div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: 'hsl(0, 0%, 96%)', minHeight: '100vh'}}>
		<div className="container">
			<div className="row gx-lg-5 align-items-center">
			<div className="col-lg-6 mb-5 mb-lg-0">
				<h1 className="my-5 display-3 fw-bold ls-tight">
				La mejor opción <br />
				<span className="text-success">para tus envíos</span>
				</h1>
				<p style={{color: 'hsl(217, 10%, 50.8%)'}}>
				Con InstaYA puedes realizar cualquier envío a cualquier parte
				del pais, y lo mejor de todo en menos de 24 horas. Todo esto lo hacemos
				con la mayor seguridad y disciplina posible para que no suceda ningún inconveniente.
				</p>
			</div>
			<div className="col-lg-6 mb-5 mb-lg-0">
				<div className="card">
				<div className="card-body py-5 px-md-5">
					<form>
					<div className="form-outline mb-4">
						<input type="text" id="usuario" className="form-control" />
						<label className="form-label">Usuario</label>
					</div>
					<div className="form-outline mb-5">
						<input type="password" id="password" className="form-control" />
						<label className="form-label">Contraseña</label>
					</div>
	
					{/* <!-- Checkbox --> */}
					<div className="form-check d-flex mb-4">
						<input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
						<label className="form-check-label">
						Recordar contraseña
						</label>
					</div>
	
					{/* <!--Botón iniciar sesión --> */}
					<div className="text-center">
						<Link type="submit" className="btn btn-success btn-block mb-2 w-100" to="/usuario/crearenvio">
							Iniciar sesión
						</Link>
					</div>
	
					{/* <!--Botón registro--> */}
					<div className="text-center" style={{fontSize: '12px'}}>
						<p>Si no tienes cuenta, regístrate 
    					<Link to="/registro" type="submit" className="mb-4 w-100">
                		aquí
            			</Link>
						</p>
					</div>
					</form>
				</div>
				</div>
			</div>
			</div>
		</div>
	</div>
  );
}

export default App;
