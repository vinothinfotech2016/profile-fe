import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSelector } from "react-redux";
import Loader from "./components/shared/Loader";
import CustomSnackbar from "./components/shared/CustomSnackbar";
import { PrototypeNavigation } from "./components/navigation/Navigation";

const queryClient = new QueryClient();
function App() {
  const globalState = useSelector((state) => state);

  return (
    <div className="App">
      <PrototypeNavigation />
    </div>
  );
}

export default App;
