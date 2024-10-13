import './Cosmonaut.css';
import cosmonautsImage from '../../assets/images/cosmonauts.png';

function Cosmonaut(){
    return(
        <div className='cosmonauts-container'>
            <img src={cosmonautsImage} alt='Cosmonauts' className='cosmonaut-image'/>
        </div>
    );
};

export default Cosmonaut;