import PropTypes from "prop-types";

export const UserItem = ({ id, name, surname, age, email, password }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td className="password-like">{password}</td>
    </tr>
  );
};


UserItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
