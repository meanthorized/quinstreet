import { validateInput } from '../../../utils/validateInput';
import './submitButton.less';

export function SubmitButton({ form, textContent }) {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'button-wrapper';

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = textContent;
    button.className = 'submit-button';

    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default submission

        const inputs = form.querySelectorAll('input[required]');
        let isFormValid = true;

        inputs.forEach((input) => {
            if (!validateInput(input, {isRequired: input.required, minLength: input.minLength })) {
                isFormValid = false;
                input.classList.add('error');
            }
        });

        if (isFormValid) {
            console.log('✅ Form submitted successfully!');
            // Handle actual form submission (e.g., API call)
        } else {
            console.log('❌ Form contains errors. Please fix them.');
        }
    });

    buttonWrapper.appendChild(button);

    return buttonWrapper;
}