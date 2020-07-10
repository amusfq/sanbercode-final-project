import React, {Component} from 'react';

class Modal extends Component {
    constructor (props) {
        super(props);

        this.state = {
            judul: "",
            tipe: "",
            deskripsi: "",
            link_gambar: "",
        }
    }

    handleChange = e => {
        this.setState(e)
    }

    handleSubmit = e => {
        e.preventDefault();
        const {judul, tipe, deskripsi, link_gambar} = this.state;
        if (judul === '' || tipe === '' || deskripsi === '' || link_gambar === '') {
            alert('Ada field yang belum terisi');
        } else {
            this.props.onSubmit(this.state);
            const body = document.querySelector('body')
            const modal = document.querySelector('.modal')
            modal.classList.toggle('opacity-0')
            modal.classList.toggle('pointer-events-none')
            body.classList.toggle('modal-active')
            this.resetState();
        }
    }

    resetState = () => {
        this.setState({
            judul: "",
            tipe: "",
            deskripsi: "",
            link_gambar: "",
        });
    }

    componentDidMount() {
        const overlay = document.querySelector('.modal-overlay')
        overlay.addEventListener('click', toggleModal)
        
        var closemodal = document.querySelectorAll('.modal-close')
          for (var i = 0; i < closemodal.length; i++) {
          closemodal[i].addEventListener('click', toggleModal)
        }
        
        document.onkeydown = function(evt) {
          evt = evt || window.event
          var isEscape = false
          if ("key" in evt) {
              isEscape = (evt.key === "Escape" || evt.key === "Esc")
          } else {
              isEscape = (evt.keyCode === 27)
          }
          if (isEscape && document.body.classList.contains('modal-active')) {
              toggleModal()
          }
        };
    
        function toggleModal () {
          const body = document.querySelector('body')
          const modal = document.querySelector('.modal')
          modal.classList.toggle('opacity-0')
          modal.classList.toggle('pointer-events-none')
          body.classList.toggle('modal-active')
        }
    }

    render () {
        
        return (
            <div className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                
                <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                
                <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
                    <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                    <span className="text-sm">(Esc)</span>
                </div>

                {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
                <div className="modal-content py-4 text-left px-6">
                    {/* <!--Title--> */}
                    <div className="flex justify-between items-center pb-3">
                    <p className="text-2xl font-bold">Tambah Data</p>
                    <div className="modal-close cursor-pointer z-50">
                        <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                    </div>
                    </div>

                    {/* <!--Body--> */}
                    <form id="form">
                        <InputField label="judul" onChange={this.handleChange} value={this.state.judul}/>
                        <InputField label="tipe" onChange={this.handleChange} value={this.state.tipe}/>
                        <InputField label="deskripsi" onChange={this.handleChange} value={this.state.deskripsi}/>
                        <InputField label="link_gambar" onChange={this.handleChange} value={this.state.link_gambar}/>
                    </form>

                    {/* <!--Footer--> */}
                    <div className="flex justify-end pt-2">
                    <button onClick={this.handleSubmit} className="px-4 bg-indigo-500 py-2 rounded-lg text-white hover:bg-indigo-400">Simpan</button>
                    </div>
                    
                </div>
                </div>
            </div>
        )
    }
}

class InputField extends Component {

    inputChange = e => {
        const name = e.target.name;
        const value = e.target.value
        this.props.onChange({[name]: value});
    }
    render () {
        const {label, value} = this.props;
        return (
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor={label}>
                    {label.replace('_', ' ').toUpperCase()}
                </label>
                {
                    label === 'deskripsi' ?
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={label} name={label} value={value} onChange={this.inputChange}>
                    </textarea> :
                    label === 'tipe' ?
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={label} name={label} value={value} onChange={this.inputChange}>
                        <option value="">Pilih tipe</option>
                        <option value="web">Web</option>
                        <option value="mobile">Mobile</option>
                        <option value="desktop">Desktop</option>
                    </select>:
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={label} name={label} type="text" value={value} onChange={this.inputChange}/>
                }
            </div>
        )
    }
}

export default Modal