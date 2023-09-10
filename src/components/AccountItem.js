import "./css/AccountItem.css";
import image from "./images/boy0.png";
import axios from "axios";
import { useState } from "react";
import LoadingScreen from "react-loading-screen";

const AccountItem = ({ account }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete("http://localhost:3000/" + account._id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main_div_container">
      <LoadingScreen
        loading={isLoading}
        bgColor="#f1f1f1"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        text="Deleting User..."
      >
        {" "}
      </LoadingScreen>
      <img src={image} alt="boy" />
      <div className="item">
        <div className="details">
          <div className="account_name">{account.name}</div>
          <div className="account_password">{account.password}</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          onClick={handleDelete}
        >
          <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
        </svg>
      </div>
    </div>
  );
};

export default AccountItem;
