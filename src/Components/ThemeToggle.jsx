import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalContext';

function ThemeToggle() {

    const {baseTheme} = useContext(GlobalContext);
    const [theme, setTheme] = baseTheme;

    const changeTheme = () => {
      setTheme(theme === 'white' ? 'black' : 'white');
      var selector;
      if (theme === 'black') {
        selector = document.querySelectorAll('.bg-white');
        loopSelector('white', 'bg', selector);
        selector = document.querySelectorAll('.text-black');
        loopSelector('black', 'text', selector);
        selector = document.querySelectorAll('.border-white');
        loopSelector('white', 'border', selector);
      } else {
          selector = document.querySelectorAll('.bg-black');
          loopSelector('black', 'bg', selector);
          selector = document.querySelectorAll('.text-white');
          loopSelector('white', 'text', selector);
          selector = document.querySelectorAll('.border-black');
          loopSelector('black', 'border', selector);
      }
    }

    function loopSelector(theme, type, selector) {
        const antiTheme = (theme === 'black' ? 'white' : 'black');
        for (var i=0; i < selector.length; i++) {
            selector[i].classList.remove(type + '-' + theme);
            selector[i].classList.add(type + '-' + antiTheme);
          }
    }
  
    return (
        <button 
            className="fixed bottom-0 right-0 mb-16 lg:mb-10 mr-10 h-12 w-12 bg-blue-600 hover:bg-blue-700 rounded-full" 
            title="Change theme" 
            onClick={() => changeTheme()}>
                <i className={"fas fa-" + (theme === 'white' ? 'moon' : 'sun')}></i>
        </button>
    );
}

export default ThemeToggle;