import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
  const user = useLoaderData;
  console.log(user)
  return <div>
    <h2>User Data</h2>
  </div>;
};

export default UserDetail;
