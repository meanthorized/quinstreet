export function validateInput(input, { isRequired, minLength }) {
    const value = input.value.trim();
    let isInputValid = true;

    if (isRequired && value.length <= 0) {
        isInputValid = false;
    }

    if (minLength && value.length < minLength) {
        isInputValid = false;
    }

    if (input.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

        if (!emailRegex.test(value)) {
            isInputValid = false;
        }
    }

    if (input.type === "tel" && input.inputmask) {
        if (!input.inputmask.isComplete()) {
            isInputValid = false;
        }
    }

    return isInputValid;
}
