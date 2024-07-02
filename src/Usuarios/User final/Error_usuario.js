import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import HeaderUsuario from '../../components/header/HeaderUsuario';

function Error_usuario() {
    return (
        <div>
            <HeaderUsuario/>

            <main id="main">
              <section className="section-bg mt-4">
                <div className="container">

                  <div className="section-title">
                    <span>Informar error</span>
                    <h2>Informar error</h2>
                    <p>En este aparatado puede enviarnos cualquier error ocurrido</p>
                  </div>

                    <div className="col-lg-12 col-md-12 px-5">
                      <div className="contact">
                        <form action="" method="post" role="form" className="php-email-form">
                          <div className="row">
                            <div className="form-group col-md-6">
                              <label>Nombres y Apellidos</label>
                              <input type="text" name="nombres_apellidos" className="form-control" id="nombres_apellidos" required/>
                            </div>
                            <div className="form-group col-md-6 mt-3 mt-md-0">
                              <label>Correo electrónico</label>
                              <input type="email" className="form-control" name="email" id="email" required/>
                            </div>
                          </div>
                          <div className="form-group mt-3">
                            <label>Asunto</label>
                            <input type="text" className="form-control" name="asunto" id="asunto" required/>
                          </div>
                          <div className="form-group mt-3">
                            <label>Descripción del problema</label>
                            <textarea className="form-control" name="descripcion" rows="10" required></textarea>
                          </div>
                          <div className="text-center mt-3"><button type="submit">Enviar reporte</button></div>
                        </form>
                      </div>
                    </div>
                </div>
              </section>{/* <!-- End Services Section --> */}

            </main>{/* <!-- End #main --> */}

            <Footer/>
        </div>
    );
}

export default Error_usuario;