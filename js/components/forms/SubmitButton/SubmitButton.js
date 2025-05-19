import { validateInput } from '../../../utils/validateInput';
import './submitButton.less';

export function SubmitButton({ form, textContent }) {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'button-wrapper';

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = textContent;
    button.className = 'submit-button';

    // Validate form
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default submission

        const inputs = form.querySelectorAll('input');
        let isFormValid = true;

        inputs.forEach((input) => {
            if (!validateInput(input, {isRequired: input.required, minLength: input.minLength })) {
                isFormValid = false;
                input.classList.add('error');
            }
        });

        if (isFormValid) {
            console.log('Form valid. Processing to submit');
            form.requestSubmit();
        } else {
            console.log('Form invalid. Please fix errors.');
        }
    });

    buttonWrapper.appendChild(button);

    return buttonWrapper;
}