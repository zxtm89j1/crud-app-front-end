const AccountItem = ({ account }) => {
  return (
    <div>
      <div>{account.name}</div>
      <div>{account.email}</div>
      <div>{account.password}</div>
    </div>
  );
};

export default AccountItem;
