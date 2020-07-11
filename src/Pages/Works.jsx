import React, {useContext, useEffect, useState} from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import {Title, WorkCard} from '../Components';

function Works() {
    const {navbarState, works} = useContext(GlobalContext);
    const [, setActiveNavbar] = navbarState;
    const [dataWork, ]  = works;
    const [filterWork, setFilterWork] = useState('all');
    const [dataFiltered, setDataFiltered] = useState([]);

    useEffect( () => {
        document.title = 'My Works - Achmad Musyaffa Taufiqi';
    },[]);

    useEffect( () => {
        setActiveNavbar(1);
        setDataFiltered(dataWork);
    },[])

    const setFilter = (filter) => {
        setFilterWork(filter);
        filter === 'all' ? setDataFiltered(dataWork) : setDataFiltered(dataWork.filter( (item) => item.tipe === filter));
    }

    return (
        <div className="w-full px-4 py-8 text-center">
            <Title value="My Works"/>
            <div className="px-4 flex space-x-4 justify-center mb-4">
                <div onClick={() => setFilter('all')} className={"px-4 py-2 border-b-2 border-black text-sm lg:text-base font-medium hover:border-blue-600 cursor-pointer" + (filterWork === 'all' ? ' border-blue-600' : '')}>ALL</div>
                <div onClick={() => setFilter('web')} className={"px-4 py-2 border-b-2 border-black text-sm lg:text-base font-medium hover:border-blue-600 cursor-pointer" + (filterWork === 'web' ? ' border-blue-600' : '')}>WEB</div>
                <div onClick={() => setFilter('mobile')} className={"px-4 py-2 border-b-2 border-black text-sm lg:text-base font-medium hover:border-blue-600 cursor-pointer" + (filterWork === 'mobile' ? ' border-blue-600' : '')}>MOBILE</div>
                <div onClick={() => setFilter('desktop')} className={"px-4 py-2 border-b-2 border-black text-sm lg:text-base font-medium hover:border-blue-600 cursor-pointer" + (filterWork === 'desktop' ? ' border-blue-600' : '')}>DESKTOP</div>
            </div>
            <div className="px-4 lg:px-64 flex flex-wrap justify-center">
                {
                    dataFiltered.length === 0 ? "Tidak ada data" :
                    dataFiltered.map((value, index) => 
                        <WorkCard key={index} title={value.judul} img={value.link_gambar} desc={value.deskripsi}/>
                    )
                }
            </div>
        </div>
    )
}

export default Works;