import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layout/Layout';

import '@coreui/coreui/dist/css/coreui.min.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />{' '}
        </Layout>
    );
}

export default MyApp;
