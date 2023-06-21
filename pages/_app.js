import "@/styles/globals.css";
import { Kanit } from 'next/font/google'
 
const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
})
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={kanit.className}>
      <Component {...pageProps} />
    </main>
  )
}
