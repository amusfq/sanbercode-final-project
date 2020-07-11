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
            <p>If you are interested or have any question, send me a message.</p>
            <div className="flex flex-wrap bg-gray-900 mx-2 lg:mx-64 my-10 px-8 py-4">
                <div className="w-full lg:w-1/2 text-left pr-8">
                    <h3 className="font-bold text-xl lg:text-2xl mb-4">Contact Information</h3>
                    <div className="flex flex-row items-center">
                        <i className="w-2/12 lg:w-1/12 fas fa-map-marker-alt my-4"></i>
                        <p className="w-10/12 lg:w-11/12">Ds Terung Kulon, Krian, Sidoarjo, Jawa Timur, Indonesia</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <i className="w-2/12 lg:w-1/12 fas fa-phone my-4"></i>
                        <p className="w-10/12 lg:w-11/12">+62 89612890670</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <i className="w-2/12 lg:w-1/12 fas fa-envelope my-4"></i>
                        <p className="w-10/12 lg:w-11/12">amusfq@gmail.com</p>
                    </div>
                    <div className="flex flex-row items-center space-x-4 mt-2">
                        <a className="text-2xl hover:text-blue-600" href="https://instagr.am/amusfq" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a className="text-2xl hover:text-blue-600" href="https://fb.me/amusfq" target="_blank"><i className="fab fa-facebook"></i></a>
                        <a className="text-2xl hover:text-blue-600" href="https://linkedin.com/in/amusfq" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a className="text-2xl hover:text-blue-600" href="https://github.com/amusfq" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 text-left my-8 lg:my-0">
                    <form>
                        <div class="mb-4">
                            <label class="block text-sm font-bold mb-2 text-white" for="name">
                                Name
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" required/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-sm font-bold mb-2 text-white" for="email">
                                Email
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" required/>
                        </div>
                        <div class="mb-4">
                            <label class="block text-sm font-bold mb-2 text-white" for="message">
                                Message
                            </label>
                            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" required>
                            </textarea>
                        </div>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Index;