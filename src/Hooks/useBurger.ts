import { useEffect, useState } from 'react';

const useBurger = () =>
{
    const [burger, setBurger] = useState(false);
    const [burger_menu, setBurgerMenu] = useState(true);

    useEffect(() => {
        window.onresize = () => {
            if (window.innerWidth <= 700) {
                setBurger(true);
            } else {
                setBurger(false);
            }
        }

        window.innerWidth <= 700 ? setBurger(true) : setBurger(false);
        (document.querySelector('.root-block') as HTMLElement).style.overflow = burger_menu && 'hidden';
    }, [burger_menu]);

    return {burger, burger_menu, setBurgerMenu};
}

export default useBurger;