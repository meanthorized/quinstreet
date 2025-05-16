export function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';

    const logo = document.createElement('img');
    logo.src = '../../assets/images/logo.svg';
    logo.alt = 'Modernize Home Empowerment Logo';
    logo.className = 'logo';

    header.appendChild(logo);
    return header;
}