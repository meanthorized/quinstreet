import './form.less';
import { InputText } from '../InputText/InputText.js';
import { InputPhone } from '../InputPhone/InputPhone.js';
import { InputEmail } from '../InputEmail/InputEmail.js';
import { SubmitButton } from '../SubmitButton/SubmitButton.js';


export function Form() {
    const form = document.createElement('form');
    form.className = 'contest-entry-form';

    form.innerHTML = `
        <div class="title">
            <h1>Enter to win a 3rd generation Nest Learning Thermostat worth $249.</h1>
        </div>
        <section class="contact-information">
        </section>
    `;

    const location = document.createElement('div');
    location.className = 'location';

    const contactInformation = form.querySelector('.contact-information');

    const nameInputData = {
        id: 'name',
        label: 'Name',
        placeholder: 'Name',
        validationRules: {
            isRequired: true,
            minLength: 2,
        },
    }
    const cityInputData = {
        id: 'city',
        label: 'City',
        placeholder: 'City',
        validationRules: {
            isRequired: false,
        },
    }
    const stateInputData = {
        id: 'state',
        label: 'State',
        placeholder: 'State',
        validationRules: {
            isRequired: false,
        },
    }
    const phoneNumberInputData = {
        id: 'phone',
        label: 'Phone',
        placeholder: 'Phone Number',
        validationRules: {
            isRequired: true,
        },
    }
    const emailInputData = {
        id: 'email',
        label: 'Email',
        placeholder: 'Email',
        validationRules: {
            isRequired: true,
        },
    }

    contactInformation.appendChild(InputText(nameInputData));

    location.appendChild(InputText(cityInputData));
    location.appendChild(InputText(stateInputData));
    contactInformation.appendChild(location);

    contactInformation.appendChild(InputPhone(phoneNumberInputData));
    contactInformation.appendChild(InputEmail(emailInputData));
    contactInformation.appendChild(SubmitButton({form, textContent: 'ENTER TO WIN'}));

    return form;
}
