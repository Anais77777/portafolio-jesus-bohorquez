// pages/_app.js
import "../globals.css";
import "./Styles/custom.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
