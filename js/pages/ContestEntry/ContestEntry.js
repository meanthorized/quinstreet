import * as styles from './contestEntry.module.less';
import { Form } from '../../components/forms/Form/Form';
import { InfoBox } from '../../components/InfoBox/InfoBox';

export function ContestEntry() {
    const contestEntryPage = document.createElement('div');
    contestEntryPage.className = styles['contest-entry-page'];

    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';

    const infoContainer = document.createElement('div');
    infoContainer.className = styles['info-container'];

    formContainer.appendChild(Form());
    infoContainer.appendChild(InfoBox());

    contestEntryPage.appendChild(formContainer);
    contestEntryPage.appendChild(infoContainer);

    return contestEntryPage;
}
