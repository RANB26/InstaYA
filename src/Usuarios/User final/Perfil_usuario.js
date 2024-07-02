import { Link } from 'react-router-dom';
import ActualizarDatos from '../../components/ActulizarDatos';
import Footer from '../../components/Footer';
import InfoUsuario from '../../components/InfoUsuario';
import HeaderUsuario from '../../components/header/HeaderUsuario';

function Perfil_usuario() {
    return (
        <div>
            <HeaderUsuario/>

			<main id="main">
				<section id="contact" className="contact mt-3">
					<div className="container">

						<div className="section-title">
							<span>Usuario</span>
							<h2>Usuario</h2>
							<p>Usted puede realizar envíos y consultar el historial de estos</p>
						</div>
						
						<div className="row">
							<InfoUsuario/>
							<ActualizarDatos/>
						</div>
					</div>
				</section>

			</main>{/* <!-- End #main --> */}
			<Footer/>
        </div>
    );
}

export default Perfil_usuario;