import './header.less';
import logoImg from '../../../assets/images/logo.svg';

export function Header() {
    const header = document.createElement('header');
    header.className = 'header';

    const logo = document.createElement('img');
    logo.src = logoImg;
    logo.alt = 'Modernize Home Empowerment Logo';
    logo.className = 'logo';

    header.appendChild(logo);

    return header;
}
