// App.jsx
import { useState } from "react";
import AuthPage from "./components/Pages/AuthPage";
import ChatsPage from "./components/Pages/ChatsPage";
import "./App.css";

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
