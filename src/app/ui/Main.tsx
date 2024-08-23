"use client";

export default function Main(
    { children }:  Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="row-span-10 flex content-center justify-center bg-blue-400 py-5 text-xl">
          <main className="mt-12 h-full w-1/2" >
            {children}
          </main>
        </div> 
    )
}