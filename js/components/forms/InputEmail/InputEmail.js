import * as styles from './inputEmail.module.less';
import { validateInput } from '../../../utils/validateInput';

export function InputEmail({ id, label, placeholder, validationRules }) {
    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add(styles['input-wrapper']);

    const inputLabel = document.createElement('label');
    inputLabel.htmlFor = `${id}-input`;
    inputLabel.textContent = label;
    inputLabel.className = styles['visually-hidden'];

    const input = document.createElement('input');
    input.type = 'email';
    input.id = `${id}-input`;
    input.name = id;
    input.placeholder = placeholder;
    input.required = validationRules.isRequired || false;
    input.minLength = 2;

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