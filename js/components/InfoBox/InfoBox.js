import * as styles from './infoBox.module.less';

export function InfoBox() {
    const title = 'EVEN MORE SAVINGS';
    const advertising = 'ADVERTORIAL';
    const subtitle = 'Tricks Homeowners Use to Eliminate Bills';
    const infoText = 'Surging energy bills, unpredictable weather patterns and dissatisfaction with utility companies have homeowners scrambling…';
    const readMoreLabel = 'READ MORE';
    const readMoreLink = 'https://www.google.com/';

    const infoBox = document.createElement('div');
    infoBox.className = styles['info-box'];

    infoBox.innerHTML = `
        <div class="${styles['title-section']}">
            <div class="${styles.right}"></div>
            <div class="${styles.center}"></div>
            <p class="${styles.title}">${title}</p>
            <div class="${styles.left}"></div>
        </div>
        <div class="${styles.info}">
            <p class="${styles.advertising}">${advertising}</p>
            <h2 class="${styles.subtitle}">${subtitle}</h2>
            <p class="${styles['info-text']}">
                ${infoText}
                <a class="${styles['read-more-link']}" href="${readMoreLink}" target="_blank" rel="noreferrer" rel="noopener">
                    ${readMoreLabel}
                </a>
            </p>
        </div>
    `;

    return infoBox;
}
