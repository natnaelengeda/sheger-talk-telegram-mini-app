import React, { useEffect } from 'react'
// import NavBar from './navbar'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const loadEruda = async () => {
    console.log(import.meta.env.MODE)
    if (
      import.meta.env.MODE === 'development' &&
      typeof window !== 'undefined') {

      const eruda = await import('eruda');
      eruda.default.init();
    }
  };

  useEffect(() => {
    loadEruda();
  }, []);

  return (
    <div
      className='w-full h- relative min-h-screen flex flex-col '>
      {children}
      {/* <NavBar /> */}
    </div>
  )
}
