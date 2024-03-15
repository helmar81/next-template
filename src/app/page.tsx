import { Metadata } from 'next'

import Link from 'next/link'
 
export const metadata: Metadata = {
  title: 'Next.js',
}




export default function Page() {
  return <><h1>Hello, Next.js!</h1>
  
  <Link href="/dashboard">Dashboard</Link></>
}