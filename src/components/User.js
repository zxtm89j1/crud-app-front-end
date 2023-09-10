const User = (props) => {
  const data = props.data;
  return (
    <div>
      <div>{data.password}</div>
      <div>{data.email}</div>
      <div>{data.name}</div>
    </div>
  );
};

export default User;
