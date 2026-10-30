import '../CSS-Alitra/homepage.css';
import PizzaGrid from './Pizzas';'./Pizzas.tsx';

export default function HomePage () {

    return <div>
                <p className='hero-description'>Bienvenue dans Le Carnet des Pizzas<br />le temple ultime de la pizza et de tout son univers</p>
                <ul>
                    <li className='hero-saucetomate'>
                        Sauce Tomate
                        <ul>
                            <li className='hero-categorie'>
                                Viande
                                <ul>
                                    <li className='hero-pizzas'>
                                        <PizzaGrid />
                                    </li>
                                </ul>
                            </li>
                            <li className='hero-categorie'>
                                Poisson
                                <ul>
                                    <li className='hero-pizzas'>
                                        <PizzaGrid />
                                    </li>
                                </ul>
                            </li>
                            <li className='hero-categorie'>
                                Végétarien
                                <ul>
                                    <li className='hero-pizzas'>
                                        <PizzaGrid />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className='hero-cremefraiche'>
                        Crème Fraîche
                        <ul>
                            <li className='hero-categorie'>
                                Viande
                                <ul>
                                    <li className='hero-pizzas'>
                                        <PizzaGrid />
                                    </li>
                                </ul>
                            </li>
                            <li className='hero-categorie'>
                                Poisson
                                <ul>
                                    <li className='hero-pizzas'>
                                        <PizzaGrid />
                                    </li>
                                </ul>
                            </li>
                            <li className='hero-categorie'>
                                Végétarien
                                <ul>
                                    <li className='hero-pizzas'>
                                        <PizzaGrid />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
};