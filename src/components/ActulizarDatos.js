function ActualizarDatos() {
	return (
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
    );
}

export default ActualizarDatos;