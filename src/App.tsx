import React, { useEffect, useRef } from "react";
import Navigation from "./AppRoutes";
import { fetchRemoteUsers } from "./store/UserStore";
import { Linking } from "react-native";

function App(): React.JSX.Element {
  const navRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchRemoteUsers();
    }, 20000);
  
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink({url});
      }
    });

    const subscription = Linking.addEventListener('url', handleDeepLink)
  
    return () => {
      subscription.remove();
    }
  }, []);

  const handleDeepLink = (event: { url: string; }) => {
    // here we can route to different screens based on url
    // currently we are just redicting to user list screen for every url
    navRef.current && navRef.current.navigate('UserList');
  }
  
  return (
    <Navigation ref={navRef} />
  );
}

export default App;
