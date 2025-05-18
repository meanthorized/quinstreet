import './contestEntry.less';
import { Form } from '../../components/forms/Form/Form';

export function ContestEntry() {
    const contestEntryPage = document.createElement('div');
    contestEntryPage.className = 'contest-entry-page';
    contestEntryPage.appendChild(Form());

    return contestEntryPage;
}
