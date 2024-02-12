import '@/styles/globals.css'
import { Providers } from '@/app/providers'

import Header from '@/components/organism/nav/Headerv2'
import Footer from '@/components/organism/nav/Footer'
import Cursor from '@/components/atom/Cursor'

export const metadata = {
   title: {
      default: 'Hasira - UI Designer & Frontend Freelancer',
      template: '%s | Hasira - UI Designer & Frontend Freelancer',
   },
   // description: `Experienced Freelance Logo Designer with 10 years of experience. I specialize in creating distinctive brand identities that capture your brand's story and set you apart in the market. Explore my portfolio to see a decade of creative excellence in logo design.`,
}

export default function LocaleLayout({ children }) {
   return (
      <html suppressHydrationWarning>
         <body className={'dark bg-pig-pink-300 text-pig-pink-950 antialiased'}>
            <Providers>
               <main className='h-full relative'>
                  <Header />
                  <main className='container max-w-8xl mx-auto pt-32 px-6 pb-12'>{children}</main>
                  {/* <Cursor /> */}
                  {/* <Footer /> */}
               </main>
            </Providers>
         </body>
      </html>
   )
}
