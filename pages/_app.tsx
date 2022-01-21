import { wrapper } from "../store";

import '../styles/globals.css';
import '../styles/antdstyles.css';

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default wrapper.withRedux(MyApp);
