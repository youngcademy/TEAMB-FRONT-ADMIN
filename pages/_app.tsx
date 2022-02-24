import '../styles/globals.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { store } from '../app/store';
import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';
import Layout from '../layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />{' '}
            </Layout>
        </Provider>
    );
}

export default MyApp;
