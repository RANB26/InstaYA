import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import InfoUsuario from '../../components/InfoUsuario';
import ActualizarDatos from '../../components/ActulizarDatos';
import HeaderAdmin from '../../components/header/HeaderAdmin';

function Perfil_admin() {
    return (
        <div>
            <HeaderAdmin/>
            <main id="main">
                <section id="contact" className="contact mt-3">
                <div className="container">

                    <div className="section-title">
                        <span>Administrador</span>
                        <h2>Administrador</h2>
                        <p>Usted tiene el control total de la aplicación</p>
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

export default Perfil_admin;