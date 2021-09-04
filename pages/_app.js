import './_app.scss';
import {SSRProvider} from '@react-aria/ssr';



export default function App({Component, pageProps}){
    return (
        <SSRProvider>
            <Component {...pageProps}></Component>
        </SSRProvider>
    )
}