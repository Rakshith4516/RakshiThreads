import { ClerkProvider } from "@clerk/nextjs"
import {Inter} from "next/font/google"

import '../globals.css';

export const metadata = {
    title:'RakshiThreads',
    description:'A Next.js threads application'
}

const inter = Inter({subsets:["latin"]})

export default function RootLayout({
    childern
}:
    {
        childern: React.ReactNode
    }) {
        return( 
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    {childern}
                </body>
            </html>
        </ClerkProvider>
        )
    }