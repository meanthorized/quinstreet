import '../styles.common/main.less';
import { Header } from './components/Header/Header.js';
import { ContestEntry } from './pages/ContestEntry/ContestEntry.js';

document.addEventListener('DOMContentLoaded', () => {
    // <main> tag
    const main = document.createElement('main');
    main.className = 'main-content';
    main.appendChild(ContestEntry());

    // Append HTML elements & components
    document.body.appendChild(Header()); // Add <header>
    document.body.appendChild(main); // Add <main>
});
