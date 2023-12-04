/* eslint-disable react/prop-types */
import "./User.css"
const User = ({ user }) => {
  console.log(user);
  const { name, id, phone, email } = user;
  return <div className="user">
    <h2>{name}</h2>
    <h4>ID: {id}</h4>
    <p>Phone: {phone} </p>
    <p>Email: {email} </p>
  </div>;
};

export default User;
