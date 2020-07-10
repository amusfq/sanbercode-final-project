import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext';

function Navbar(props) {

    const {navbarState} = useContext(GlobalContext);
    const [activeNavbar, ] = navbarState;
    const {pos} = props;

    return (
        <nav className={"w-full lg:p-4 border-t border-gray-500 lg:border-0 bg-black" + (pos === 'top' ? ' sticky top-0 hidden lg:block' : ' sticky bottom-0 block lg:hidden')}>
            <ul className="flex lg:flex-wrap justify-center lg:justify-end space-x-4 px-0 lg:px-24">
                <li className="w-1/4 lg:w-auto text-center">
                    <Link className={"block py-2 font-bold border-b-2 border-black hover:border-blue-600" + (activeNavbar === 0 ? " border-blue-600" : "")} to="/">
                        <div className="block lg:hidden flex flex-col">
                            <i className="fas fa-home"></i>
                            <span className="text-sm font-normal">Home</span>
                        </div>
                        <span className="hidden lg:block">About</span>
                    </Link>
                </li>
                <li className="w-1/4 lg:w-auto text-center">
                    <Link className={"block py-2 font-bold border-b-2 border-black hover:border-blue-600" + (activeNavbar === 1 ? " border-blue-600" : "")} to="/works">
                        <div className="block lg:hidden flex flex-col">
                            <i className="fas fa-briefcase"></i>
                            <span className="text-sm font-normal">Works</span>
                        </div>
                        <span className="hidden lg:block">Works</span>
                    </Link>
                </li>
                <li className="w-1/4 lg:w-auto text-center">
                    <Link className={"block py-2 font-bold border-b-2 border-black hover:border-blue-600" + (activeNavbar === 2 ? " border-blue-600" : "")} to="/repository">
                        <div className="block lg:hidden flex flex-col">
                            <i className="fab fa-github"></i>
                            <span className="text-sm font-normal">Repo</span>
                        </div>
                        <span className="hidden lg:block">Repository</span>
                    </Link>
                </li>
                <li className="w-1/4 lg:w-auto text-center">
                    <Link className={"block py-2 font-bold border-b-2 border-black hover:border-blue-600" + (activeNavbar === 3 ? " border-blue-600" : "")} to="/contact">
                        <div className="block lg:hidden flex flex-col">
                            <i className="fas fa-phone"></i>
                            <span className="text-sm font-normal">Contact</span>
                        </div>
                        <span className="hidden lg:block">Contact</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;