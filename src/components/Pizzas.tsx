import { Link } from 'react-router';
import '../CSS-Alitra/Pizzas.css'

export default function PizzaGrid () {
    return (
        <>
            <Link to ="/Fiche" className='pizzas-link'>
                <figure>
                    <img src="../public/pizza-random.png" alt="" />
                    <figcaption>
                        Pizza 1
                    </figcaption>
                </figure>
            </Link>
            <Link to ="/Fiche" className='pizzas-link'>
                <figure>
                    <img src="../public/pizza-random.png" alt="" />
                    <figcaption>
                        Pizza 2
                    </figcaption>
                </figure>
            </Link>
            <Link to ="/Fiche" className='pizzas-link'>
                <figure>
                    <img src="../public/pizza-random.png" alt="" />
                    <figcaption>
                        Pizza 3
                    </figcaption>
                </figure>
            </Link>
            <Link to ="/Fiche" className='pizzas-link'>
                <figure>
                    <img src="../public/pizza-random.png" alt="" />
                    <figcaption>
                        Pizza 4
                    </figcaption>
                </figure>
            </Link>
            <Link to ="/Fiche" className='pizzas-link'>
                <figure>
                    <img src="../public/pizza-random.png" alt="" />
                    <figcaption>
                        Pizza 5
                    </figcaption>
                </figure>
            </Link>
        </>

    )
};