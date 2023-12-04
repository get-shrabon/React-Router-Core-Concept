/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./User.css";
const User = ({ user }) => {
  const { name, id, phone, email } = user;
  return (
    <div className="user">
      <h2>{name}</h2>
      <h4>ID: {id}</h4>
      <p>Phone: {phone} </p>
      <p>Email: {email} </p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
