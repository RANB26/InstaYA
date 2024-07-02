import { Link } from 'react-router-dom';

function HeaderAdmin() {
	return (
		<header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="logo"><Link to="/">InstaYA</Link></h1>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link className="nav-link scrollto" to="/admin/envios">Envíos</Link></li>
                        <li><Link className="nav-link scrollto " to="/admin/usuarios">Usuarios</Link></li>
                        <li><Link className="nav-link scrollto" to="/admin/repartidores">Repartidores</Link></li>
                        <li><Link className="nav-link scrollto" to="/admin/perfil">Mi perfil</Link></li>
                        <li><Link className="getstarted scrollto" to="/">Cerrar sesión</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    );
}

export default HeaderAdmin;