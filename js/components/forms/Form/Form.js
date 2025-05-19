import './form.less';
import { InputText } from '../InputText/InputText.js';
import { InputPhone } from '../InputPhone/InputPhone.js';
import { InputEmail } from '../InputEmail/InputEmail.js';
import { SubmitButton } from '../SubmitButton/SubmitButton.js';
import { submitContestEntry } from '../../../network/data.api.js';

export async function handleSubmit(event, form) {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.setAttribute('disabled', true);
    submitButton.innerText = 'SUBMITTED';

    const formData = new FormData(form);

    try {
        const responseData = await submitContestEntry(formData);

        console.log("✅ Submission successful:", responseData);
    } catch (error) {
        console.log('❌ Server Error', error);
    }
}

export function Form() {
    const nameInputData = {
        id: 'name',
        label: 'Name',
        placeholder: 'Name',
        validationRules: {
            isRequired: true,
            minLength: 2,
        },
    };
    const cityInputData = {
        id: 'city',
        label: 'City',
        placeholder: 'City',
        validationRules: {
            isRequired: false,
        },
    };
    const stateInputData = {
        id: 'state',
        label: 'State',
        placeholder: 'State',
        validationRules: {
            isRequired: false,
        },
    };
    const phoneNumberInputData = {
        id: 'phone',
        label: 'Phone',
        placeholder: 'Phone Number',
        validationRules: {
            isRequired: true,
        },
    };
    const emailInputData = {
        id: 'email',
        label: 'Email',
        placeholder: 'Email',
        validationRules: {
            isRequired: true,
        },
    };
    // const title = `Enter to win a 3rd generation Nest<br>Learning Thermostat worth $249.Enter to win a 3rd generation Nest<br>Learning Thermostat worth $249.Enter to win a 3rd generation Nest<br>Learning Thermostat worth $249.Enter to win a 3rd generation Nest<br>Learning Thermostat worth $249.Enter to win a 3rd generation Nest<br>Learning Thermostat worth $249.Enter to win a 3rd generation Nest<br>Learning Thermostat worth $249.`;
    const title = `Enter to win a 3rd generation Nest Learning Thermostat worth $249.`;

    const form = document.createElement('form');
    form.className = 'contest-entry-form';
    form.action = '#';

    form.innerHTML = `
        <div class="title">
            <h1>${title}</h1>
        </div>
        <div class="contact-information">
        </div>
    `;

    const location = document.createElement('div');
    location.className = 'location';

    const contactInformation = form.querySelector('.contact-information');

    // Attach submission event
    form.addEventListener('submit', (event) => handleSubmit(event, form));

    contactInformation.appendChild(InputText(nameInputData));

    location.appendChild(InputText(cityInputData));
    location.appendChild(InputText(stateInputData));
    contactInformation.appendChild(location);

    contactInformation.appendChild(InputPhone(phoneNumberInputData));
    contactInformation.appendChild(InputEmail(emailInputData));
    contactInformation.appendChild(SubmitButton({form, textContent: 'ENTER TO WIN'}));

    return form;
}
