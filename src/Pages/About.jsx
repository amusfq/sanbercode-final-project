import React, {useContext, useEffect} from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import me from '../assets/me.jpg'

function About() {
    const {navbarState} = useContext(GlobalContext);
    const [, setActiveNavbar] = navbarState;

    useEffect( () => {
        document.title = 'Achmad Musyaffa Taufiqi';
    },[]);

    useEffect( function updateNavbar () {
        setActiveNavbar(0);
    });

    return (
        <div className="flex flex-wrap-reverse lg:flex-wrap p-4 lg:p-24 items-center mt-8 lg:mt-0 mb-32 lg:mb-0" style={{minHeight: "calc(100vh - 75px)"}}>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="font-bold text-base lg:text-3xl mb-2 lg:mb-0">My Name is</h1>
                <h1 className="font-bold text-xl lg:text-4xl">Achmad Musyaffa Taufiqi</h1>
                <div className="font-bold text-sm lg:text-2xl bg-blue-600 mt-4 px-4 py-2 inline-block">Fullstack Developer</div>
                <div className="flex flex-wrap mt-4 space-x-2 justify-center lg:justify-start">
                    <div className="border border-blue-600 font-medium rounded px-2 mt-2">PHP</div>
                    <div className="border border-blue-600 font-medium rounded px-2 mt-2">Javascript</div>
                    <div className="border border-blue-600 font-medium rounded px-2 mt-2">Laravel</div>
                    <div className="border border-blue-600 font-medium rounded px-2 mt-2">ReactJS</div>
                    <div className="border border-blue-600 font-medium rounded px-2 mt-2">React Native</div>
                    <div className="border border-blue-600 font-medium rounded px-2 mt-2">Python</div>
                    <div className="border border-blue-600 font-medium rounded px-2 mt-2">C#</div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <img src={me} alt="Achmad Musyaffa Taufiqi" className="rounded-full border-8 border-gray-800 m-auto object-cover object-center"/>
            </div>
        </div>
    )
}

export default About;