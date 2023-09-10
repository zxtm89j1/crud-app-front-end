import { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "react-loading-screen";
import loadingGif from "./images/loading.gif";
import AccountItem from "./AccountItem";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
        setData(response.data);
        setIsLoading(false);

        // Do something with the response data if needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (isLoading) {
      fetchData();
    }
  }, [isLoading]); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div>
      <LoadingScreen
        loading={data ? false : true}
        bgColor="#f1f1f1"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        logoSrc={loadingGif}
        text="Fetching data..."
      >
        {" "}
      </LoadingScreen>

      <div className="account_item_container">
        {data !== null ? (
          data.map((account) => (
            <AccountItem key={account.id} account={account} />
          ))
        ) : (
          <p>Data is still loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
