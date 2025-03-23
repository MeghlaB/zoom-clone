import React, { ReactNode } from 'react'

function RootLayout({children} :{children:ReactNode}) {
  return (
    <main>
      navabr
     {children}
     footer
    </main>
  )
}

export default RootLayout
