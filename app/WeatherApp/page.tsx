import React from 'react'
import Navbar from "@/components/Navbar";
import WeatherPage from "@/components/WeatherPage";

function Page() {
  return (
    <main className = "relative bg-black-100 flex justify-center items-center flex-col oberflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <WeatherPage />
      </div>
    </main>
  )
}

export default Page