import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu(props) {
    return (
        <div>
            <div className='font-bold py-3 p-2'> The Menu</div>
            <ul>
                <li>
                    <Link to="/" className="text-blue-500 py-3 border-t border-b block p-4"  onClick={props.closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-blue-500 py-3 border-b block p-4" onClick={props.closeMenu}>About</Link>
                </li>
                <li>
                    <Link to="/products" className="text-blue-500 py-3 border-b block p-4" onClick={props.closeMenu}>Product</Link>
                </li>
                <li>
                    <Link to="/users" className="text-blue-500 py-3 border-b block p-4" onClick={props.closeMenu}>Users</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavigationMenu;