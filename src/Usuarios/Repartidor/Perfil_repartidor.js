import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import InfoUsuario from '../../components/InfoUsuario';
import ActualizarDatos from '../../components/ActulizarDatos';
import HeaderRepartidor from '../../components/header/HeaderRepartidor';

function Perfil_repartidor() {
    return (
        <div>
            <HeaderRepartidor/>

            <main id="main">
                {/* <!-- ======= Contact Section ======= --> */}
                <section id="contact" className="contact mt-3">
                    <div className="container">

                        <div className="section-title">
                            <span>Repartidor</span>
                            <h2>Repartidor</h2>
                            <p>Usted puede consultar sus envíos entregados</p>
                        </div>

                        <div className="row">
                            <InfoUsuario/>
                            <ActualizarDatos/>
                        </div>
                    </div>
                </section>{/* <!-- End Contact Section --> */}

            </main>{/* <!-- End #main --> */}
            <Footer/>
        </div>
    );
}

export default Perfil_repartidor;