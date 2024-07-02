import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import HeaderRepartidor from '../../components/header/HeaderRepartidor';

function Envios_repartidor() {
    return (
        <div>
            <HeaderRepartidor/>

            <main id="main">
                {/* <!-- ======= Contact Section ======= --> */}
                <section id="contact" className="contact mt-4">
                    <div className="container">

                        <div className="section-title">
                            <span>Mis envíos</span>
                            <h2>Mis envíos</h2>
                            <p>Aquí encontrará la información de sus envíos</p>
                        </div>

                        <div className="icon-box text-center" style={{borderTop: '3px solid #16df7e', borderBottom: '3px solid #16df7e', padding: '20px', backgroundColor: '#f9f9fa'}}>
                            <p><h4 className="text-danger">¡Por envíar!</h4></p>
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">Usuario</th>
                                    <th scope="col">Fecha para recoger</th>
                                    <th scope="col">Persona a entregar</th>
                                    <th scope="col">Dirección de envío</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Ejemplo</td>
                                    <td>20-11-2022</td>
                                    <td>Ejemplo Ejemplo1</td>
                                    <td>Carrera 14B #76-56</td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                                        <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-x-lg"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ejemplo</td>
                                    <td>20-11-2022</td>
                                    <td>Ejemplo Ejemplo1</td>
                                    <td>Carrera 14B #76-56</td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                                        <button type="button" className="btn btn-danger btn-circle"><i className="bi bi-x-lg"></i></button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <br/><br/>
                            <p><h4>Disponibles</h4></p>
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">Usuario</th>
                                    <th scope="col">Fecha para recoger</th>
                                    <th scope="col">Persona a entregar</th>
                                    <th scope="col">Dirección de envío</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Ejemplo</td>
                                    <td>20-11-2022</td>
                                    <td>Ejemplo Ejemplo1</td>
                                    <td>Carrera 14B #76-56</td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                                        <button type="button" className="btn btn-success btn-circle"><i className="bi bi-check-lg"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ejemplo</td>
                                    <td>20-11-2022</td>
                                    <td>Ejemplo Ejemplo1</td>
                                    <td>Carrera 14B #76-56</td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                                        <button type="button" className="btn btn-success btn-circle"><i className="bi bi-check-lg"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ejemplo</td>
                                    <td>20-11-2022</td>
                                    <td>Ejemplo Ejemplo1</td>
                                    <td>Carrera 14B #76-56</td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                                        <button type="button" className="btn btn-success btn-circle"><i className="bi bi-check-lg"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ejemplo</td>
                                    <td>20-11-2022</td>
                                    <td>Ejemplo Ejemplo1</td>
                                    <td>Carrera 14B #76-56</td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button>
                                        <button type="button" className="btn btn-success btn-circle"><i className="bi bi-check-lg"></i></button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <br/><br/>
                            <p><h4 className="text-success">Entregados <i className="bi bi-check-lg"></i></h4></p>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Codigo de envío</th>
                                        <th scope="col">Usuario</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Persona a entregar</th>
                                        <th scope="col">Dirección de envío</th>
                                        <th scope="col">Más información</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">12345</th>
                                        <td>Ejemplo</td>
                                        <td>20-11-2022</td>
                                        <td>Ejemplo Ejemplo1</td>
                                        <td>Barranquilla</td>
                                        <td><button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">12345</th>
                                        <td>Ejemplo</td>
                                        <td>20-11-2022</td>
                                        <td>Ejemplo Ejemplo1</td>
                                        <td>Barranquilla</td>
                                        <td><button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">12345</th>
                                        <td>Ejemplo</td>
                                        <td>20-11-2022</td>
                                        <td>Ejemplo Ejemplo1</td>
                                        <td>Barranquilla</td>
                                        <td><button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">12345</th>
                                        <td>Ejemplo</td>
                                        <td>20-11-2022</td>
                                        <td>Ejemplo Ejemplo1</td>
                                        <td>Barranquilla</td>
                                        <td><button type="button" className="btn btn-warning btn-circle"><i className="bi bi-info-lg"></i></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

            </main>{/* <!-- End #main --> */}
            <Footer/>
        </div>
    );
}

export default Envios_repartidor;