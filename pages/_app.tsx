import GlobalStyle from "../styles/globalStyles";
import Layout from '../components/Layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
