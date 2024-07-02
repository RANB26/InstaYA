import { Link } from 'react-router-dom';

function FormLogin() {
	return (
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
    );
}

export default FormLogin;