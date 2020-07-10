import React, {useContext, useEffect, Component, useState} from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import {Title} from '../Components';

function Repository() {
    const {navbarState} = useContext(GlobalContext);
    const [, setActiveNavbar] = navbarState;
    const [listRepo, setListRepo] = useState([]);

    useEffect( () => {
        document.title = 'My Repo - Achmad Musyaffa Taufiqi';
    },[]);

    useEffect( () => {
        setActiveNavbar(2);
        getRepo();
    }, []);

    const getRepo = () => {
        const url = 'https://api.github.com/users/amusfq/repos';
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                setListRepo(result)
            },
            (error) => {
                console.log(error)
            })
    }

    return (
        <div className="w-full px-4 py-8 text-center">
            <Title value="Repository"/>
            <div className="flex flex-wrap">
                {
                    listRepo.map((value, index) => 
                        <GithubCard key={value.id} title={value.name} url={value.html_url} desc={value.description} lang={value.language != null ? value.language.split(',') : []}/>
                    )
                }
            </div>
        </div>
    )
}

class GithubCard extends Component {

    render() {
        const {title, url, desc, lang} = this.props;
        return (
            <div className="w-full lg:w-1/3 p-2">
                <div className="border border-gray-600 rounded-md py-2 px-4 text-left">
                    <h1 className="font-medium"><i className="fas fa-book mr-2"></i> <a href={url} className="hover:text-blue-600">{title}</a></h1>
                    <p className="mt-2 text-sm">{desc != null ? desc : 'Tidak ada Deskripsi'}</p>
                    <div className="flex flex-wrap">
                        {
                            lang.map((value, index) => 
                            <div key={index} className="border border-blue-600 text-sm rounded px-2 mt-2">{value}</div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Repository;