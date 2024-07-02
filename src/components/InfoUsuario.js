function InfoUsuario() {
	return (
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
    );
}

export default InfoUsuario;