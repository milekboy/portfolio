import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
export default function App({ Component, pageProps }) {
  return <>
   <ThemeProvider enableSystem={true} attribute='class'>
  <Navbar/>
  <Component {...pageProps} />
  </ThemeProvider>
  </>
}
