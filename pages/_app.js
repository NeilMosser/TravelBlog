import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// //add in as sidebar to keep it persistent between page changes
    // <Layout>
    //</Layout>
    //return compnent between layout, along with any persistent data
    //import layout from ../components/layout