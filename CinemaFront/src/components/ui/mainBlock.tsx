import React, {FC} from 'react';
import image from '../../assets/Main.png'
import Button from './ButtonBuyTicket';
import "./styles.css";

export const MainBlock: FC<{}> = () => {
    return (
        <div id="main" style={{backgroundImage: `url(${image})`}}>           
            <div id="about_cinema">
                <h1>Про кінотеатр</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, molestias! Veniam cum ut quis id doloribus quasi? Id, recusandae dolor? Possimus quos dolorem, quia maxime tempore dolore. Reprehenderit, eum saepe?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, molestias! Veniam cum ut quis id doloribus quasi? Id, recusandae dolor? Possimus quos dolorem, quia maxime tempore dolore. Reprehenderit, eum saepe?</p>
                
                <Button/>
            </div> 

                     
        </div>     
    )
}
