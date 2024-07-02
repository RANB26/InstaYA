import Portada from './components/Portada';
import FormRegistro from '../src/components/FormRegistro';

function Registro() {
    return (
        <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: 'hsl(0, 0%, 96%)', minHeight: '100vh'}}>
			<div className="container">
				<div className="row gx-lg-5 align-items-center">
					<Portada/>
					<FormRegistro/>
				</div>
			</div>
		</div>
    );
}

export default Registro;
