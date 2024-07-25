import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex min-h-fit flex-col items-center justify-between p-24">
        <h2>Error 404 - Page not found</h2>
        <p>Check the url properly and try again.</p>
        <Link href="/" className="text-blue-500 hover:text-blue-600">Go back to home</Link>
    </div>
  )
}

export default NotFound;