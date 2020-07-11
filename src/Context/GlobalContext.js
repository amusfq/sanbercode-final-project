import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = props => {
    const [activeNavbar, setActiveNavbar] = useState(0);
    const [theme, setTheme] = useState('white');
    const [dataWork, setDataWork] = useState([
        {
            judul: 'Website Portal',
            tipe: 'web',
            deskripsi: 'Portal Website Sekolah SMK YPM 1 Taman',
            link_gambar: './assets/imgs/smk.jpg'
        },
        {
            judul: 'TOKOKU',
            tipe: 'web',
            deskripsi: 'Aplikasi POS Berbasis Web',
            link_gambar: './assets/imgs/pos-web.png'
        },
        {
            judul: 'SimPOS',
            tipe: 'desktop',
            deskripsi: 'Aplikasi POS Berbasis Desktop',
            link_gambar: './assets/imgs/pos-desktop.png'
        },
        {
            judul: 'MASS Calc',
            tipe: 'desktop',
            deskripsi: 'Aplikasi Penghitung Berat Badan Ideal berbasis Desktop',
            link_gambar: './assets/imgs/BMI.png'
        },
        {
            judul: 'CCE',
            tipe: 'desktop',
            deskripsi: 'Aplikasi Encryptor Caesar dan Vigenere berbasis Desktop',
            link_gambar: './assets/imgs/kriptografi.png'
        }
    ]);

    const values = {
        navbarState: [activeNavbar, setActiveNavbar],
        works: [dataWork, setDataWork],
        baseTheme: [theme, setTheme]
    }

    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    )
}