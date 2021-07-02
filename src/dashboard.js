import { useEffect, useState } from "react";
import { Spin } from "antd";
import { Redirect } from "react-router";

function Dashboard() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
      
    useEffect(() => {
        setLoading(false);
      }, []);
    
      function logout(){}

      function handleSubmit(e) {
        localStorage.setItem("user", null);
        setIsLoggedIn(true);
        console.log('You clicked submit.');
      }

      useEffect(() => {
        let loggedIn = true;
    
        const token = localStorage.getItem("user");
    
        if (token !== "null" && loggedIn === true) {
          setIsLoggedIn(false);
          console.log("token",token)
          console.log("isloggedIn",isLoggedIn)
        }
        else{
            setIsLoggedIn(true);
            console.log("token",token)
          console.log("isloggedIn",isLoggedIn)
        }
    
        return () => (loggedIn = false);
      }, []);
    // useEffect(() => {
        
    //     const token = localStorage.getItem("user");
    //     console.log("token",token)
    //     if (token === "null") {
    //       setIsLoggedIn(false);
    //       console.log("loged inn")
    //     }
    //     else{
    //         setIsLoggedIn(true);
    //         console.log("loged inn else")
    //         console.log(isLoggedIn)

    //     }
    
      
    //   }, []);


  return (
    <>
   
    {isLoggedIn ? (
      <Redirect to="/login" />
      ) : loading ? (
          <>
        <h1>Loading..........</h1>
        </>
      ) : (
          <>
          <h1>Dashboard</h1>
          <button onClick={handleSubmit}>
           Log out
           </button>
           </>
      )}
      
    </>
  );
}

export default Dashboard;
