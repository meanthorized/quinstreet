import './infoBox.less';

export function InfoBox() {
    const title = 'EVEN MORE SAVINGS';
    const advertising = 'ADVERTORIAL';
    const subtitle = 'Tricks Homeowners Use to Eliminate Bills';
    const infoText = 'Surging energy bills, unpredictable weather patterns and dissatisfaction with utility companies have homeowners scrambling…';
    const readMoreLabel = 'READ MORE';
    const readMoreLink = 'https://www.google.com/';

    const infoBox = document.createElement('div');
    infoBox.className = 'info-box';

    infoBox.innerHTML = `
        <div class="title-section">
            <div class="right"></div>
            <div class="center"></div>
            <p class="title">${title}</p>
            <div class="left"></div>
        </div>
        <div class="info">
            <p class="advertising">${advertising}</p>
            <h2 class="subtitle">${subtitle}</h2>
            <p class="info-text">
                ${infoText}
                <a class="read-more-link" href="${readMoreLink}" target="_blank" rel="noreferrer" rel="noopener">
                    ${readMoreLabel}
                </a>
            </p>
        </div>
    `;

    return infoBox;
}
