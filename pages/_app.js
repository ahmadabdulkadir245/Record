import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { store } from "../app/store";
import { Provider } from "react-redux";
import AuthContextProvider from "../context/auth-context";
import PropertyContextProvider from "../context/property-context";
import Header from "../components/Header/Header";
import UserNavigation from "../components/Main/UserNavigation";
import CustomUserNavigation from "./[customUserNavigationId]";

function App({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayoutNoHeader) {
    return Component.getLayoutNoHeader(
      <AuthContextProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthContextProvider>
    );
  }
  if (Component.getLayout) {
    return Component.getLayout(
      <AuthContextProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthContextProvider>
    );
  }
  return (
    <AuthContextProvider>
      <PropertyContextProvider>
        <Provider store={store}>
          <Header />
          <Component {...pageProps} />
        </Provider>
      </PropertyContextProvider>
    </AuthContextProvider>
  );
}

export default App;
