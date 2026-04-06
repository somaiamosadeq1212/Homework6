import Layout from "./components/layout/Layout.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import AppRouter from "./router/AppRouter.jsx";

export default function App() {

  return (

    // <Layout />

    <SearchProvider>
      <AppRouter />
    </SearchProvider>
    

  );
}

