import PropTypes from "prop-types";
import { UserItem } from "./user-item";

export const UserList = ({ users }) => {
  return (
    <>
      <h3>User List</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserItem key={user.id} {...user} />
          ))}
        </tbody>
      </table>
    </>
  );
};


UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ).isRequired,
};
