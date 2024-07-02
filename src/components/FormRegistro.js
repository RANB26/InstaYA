function FormRegistro() {
	return (
        <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card">
                <div className="card-body py-5 px-md-5">
                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-2">
                            <div className="form-outline">
                                <input type="text" id="nombres" className="form-control" />
                                <label className="form-label">Nombres</label>
                            </div>
                        </div>
                        <div className="col-md-6 mb-2">
                            <div className="form-outline">
                                <input type="text" id="apellidos" className="form-control" />
                                <label className="form-label">Apellidos</label>
                            </div>
                        </div>
                        </div>

                        <div className="row">
                            <div className="col-md-7 mb-3">
                            <div className="form-outline">
                                <input type="text" id="telefono" className="form-control" />
                                <label className="form-label">Teléfono</label>
                            </div>
                        </div>
                        <div className="col-md-5 mb-3">
                            <div className="form-outline">
                                <input type="number" id="edad" className="form-control" />
                                <label className="form-label">Edad</label>
                            </div>
                        </div>
                        </div>

                        <div className="form-outline mb-3">
                            <div className="form-outline">
                                <input type="text" id="direccion" className="form-control" />
                                <label className="form-label">Dirección</label>
                            </div>
                        </div>

                        <div className="form-outline mb-3">
                            <select name="rol" id="rol" className="form-control">
                                <option value="usuario_final">Usuario final</option>
                                <option value="repartidor">Repartidor</option>
                                <option value="administrador">Administrador</option>
                            </select>
                            <label className="form-label">Rol en la aplicación</label>
                        </div>

                        <div className="form-outline mb-3">
                            <input type="email" id="correo" className="form-control" />
                            <label className="form-label">Correo electrónico</label>
                        </div>

                        <div className="form-outline mb-3">
                            <input type="password" id="password" className="form-control" />
                            <label className="form-label">Contraseña</label>
                        </div>

                        {/* <!-- Botón registrarse --> */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-success btn-block mt-3 w-50">
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormRegistro;