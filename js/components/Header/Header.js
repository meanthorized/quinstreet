import * as styles from './header.module.less';
import logoImg from '../../../assets/images/logo.svg';

export function Header() {
    const header = document.createElement('header');
    header.className = styles.header;

    const logo = document.createElement('img');
    logo.src = logoImg;
    logo.alt = 'Modernize Home Empowerment Logo';
    logo.className = styles.logo;

    header.appendChild(logo);

    return header;
}
