import React, {useContext, useEffect} from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import {Title} from '../Components';

function Index() {
    const {navbarState} = useContext(GlobalContext);
    const [, setActiveNavbar] = navbarState;

    useEffect( () => {
        document.title = 'Contact Me - Achmad Musyaffa Taufiqi';
    },[]);

    useEffect( function updateNavbar () {
        setActiveNavbar(3);
    });

    return (
        <div className="w-full px-4 py-8 text-center">
            <Title value="Contact Me"/>
            <div className="flex flex-wrap mt-10">
                <div className="w-full lg:w-1/3 flex flex-col mb-4 lg:mb-0">
                    <i className="fas fa-envelope mr-2 text-2xl mb-2"></i> 
                    <p>amusfq@gmail.com</p>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col mb-4 lg:mb-0">
                    <i className="fas fa-phone fa-flip-horizontal mr-2 text-2xl mb-2"></i> +62 89612890670
                </div>
                <div className="w-full lg:w-1/3 flex flex-col mb-4 lg:mb-0">
                    <i className="fas fa-map-marked-alt mr-2 text-2xl mb-2"></i> Sidoarjo, Jawa Timur, Indonesia
                </div>
            </div>
        </div>
    )
}

export default Index;