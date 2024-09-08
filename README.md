# React + Vite

# User Management Application

This project is a simple User Management Application where users can be added, displayed in a table, and notifications are shown when a user is successfully added. The form input is validated using React Hook Form with Yup Resolver, and notifications are displayed via React Toastify. Additionally, PropTypes is used for type checking across all components.

## Key Features

- **User List**: Displays a list of users in a table format. Passwords are excluded from the display.
- **Form Validation**: Utilizes React Hook Form with Yup for input validation.
- **Add User**: Users can be added via a form. Upon successful submission, the user is added to the list and displayed in the table.
- **Toast Notifications**: Shows a success message when a user is successfully added using React Toastify.
- **Component Modularity**: Uses components like `AddUser`, `UserList`, and `UserItem` for modularity.

## Technologies Used

- **React**: For building the user interface.
- **PropTypes**: For type checking component props.
- **React Hook Form**: For managing form state and validation.
- **Yup**: For schema-based form validation.
- **React Toastify**: For displaying toast notifications.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. Navigate to the project directory:
    ```bash
    cd your-repo
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## Usage

1. Fill in the user information (Name, Surname, Age, Email, Password).
2. Click the "Add the User" button to submit the form.
3. If the form is valid, the user will be added to the table, and a success toast notification will be displayed.
4. The newly added user will appear in the table, but the password will not be displayed.

## Form Validation

The form uses **Yup** for validation with the following rules:

- **Name**: Required (string).
- **Surname**: Required (string).
- **Age**: Required (number), must be positive and an integer.
- **Email**: Required (valid email format).
- **Password**: Required, must be at least 8 characters long.

## Components

### AddUser Component

The `AddUser` component handles the form submission and validation. It also triggers the toast notification when a user is successfully added.

### UserList Component

The `UserList` component renders the table of users and passes user data to the `UserItem` component.

### UserItem Component

The `UserItem` component displays individual user information as rows in the table.

## License

This project is licensed under the MIT License.
