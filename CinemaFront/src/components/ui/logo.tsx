import {FC} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/stupka.svg';
import './styles.css';

export const MainLogo: FC<{}> = () => {
    return (        
        <div>
             <Link to="/" className="nav-link px-2 text-white">
                    <img src={logo} alt="main logo" height='110'/>
             </Link>         
     
        </div>        
    )
}