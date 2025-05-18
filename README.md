# Contest Entry Form
A web-based form for submitting contact details to enter a to win a 3rd generation NestLearning Thermostat.

## Table of Contents
- **[Installation](#installation)**
- **[Project Structure](#project-structure)**
- **[Build](#build)**

---
## Installation
### Prerequisites
- **node v22.15.1**

### Install project locally
1. Clone the GitHub repository:
   ```
   git clone https://github.com/meanthorized/quinstreet.git
   ```

2. Navigate into the project folder
    ```
    cd quinstreet
    ```

3. Intall deoendencies
    ```
    npm install
    ```

### Running locally
1. From the project folder run
    ```
    npm start
    ```
2. Visit in your browser
    ```
    http://localhost:3006
    ```

---
## Project Structure
Since this project is built with vanilla JavaScript, ES modules are organized in a component-like structure, where each component contains its JavaScript logic alongside its corresponding styles. By taking this approach, I'm aiming to enhance modularity, maintainability, and reusability.

- `quinstreet/assets`
    - Assets such as images
- `quinstreet/js/components`
    - Modular UI components (JS & styles together)
- `quinstreet/js/pages`
    - Modular UI pages (JS & styles together)
- `quinstreet/styles.common/`
    - Global styles shared across components


---
## Build
1. From the project folder run
    ```
    npm run build
    ```
