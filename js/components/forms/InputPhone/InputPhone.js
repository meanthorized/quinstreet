import Inputmask from 'inputmask';
import { validateInput } from '../../../utils/validateInput';
import * as styles from './inputPhone.module.less';

export function InputPhone({ id, label, placeholder, validationRules }) {
    const inputWrapper = document.createElement('div');
    inputWrapper.className = styles['input-wrapper'];

    const inputLabel = document.createElement('label');
    inputLabel.htmlFor = id;
    inputLabel.textContent = label;
    inputLabel.className = styles['visually-hidden'];

    const input = document.createElement('input');
    input.type = 'tel';
    input.id = id;
    input.name = id;
    input.placeholder = placeholder;
    input.required = validationRules.isRequired || false;

    Inputmask('(999) 999-9999', { placeholder: '(XXX) XXX-XXXX', showMaskOnHover: false }).mask(input);

    input.addEventListener('blur', () => {
        if (!validateInput(input, validationRules)) {
            input.classList.add(styles.error);
        } else {
            input.classList.remove(styles.error);
        }
    });

    inputWrapper.append(inputLabel, input);

    return inputWrapper;
}