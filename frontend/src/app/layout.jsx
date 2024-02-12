import '@/styles/globals.css'
import { Providers } from '@/app/providers'

import Header from '@/components/organism/nav/Headerv2'

export const metadata = {
   title: {
      default: 'Hasira - UI Designer & Frontend Freelancer',
      template: '%s | Hasira - UI Designer & Frontend Freelancer',
   },
}

export default function LocaleLayout({ children }) {
   return (
      <html suppressHydrationWarning>
         <body className={'dark bg-pig-pink-300 text-pig-pink-950 antialiased'}>
            <Providers>
               <main className='h-full relative'>
                  <Header />
                  <main className='container max-w-8xl mx-auto pt-32 px-6 pb-12'>{children}</main>
               </main>
            </Providers>
         </body>
      </html>
   )
}
