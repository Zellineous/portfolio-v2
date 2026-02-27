'use client'
import React from 'react'

function WeatherPage() {
  return (
    <div className="max-w-2xl mx-auto text-center p-5 bg-black-100 bg-opacity-50 rounded-xl shadow-lg mt-26">
        <h1 className="text-3xl font-bold mb-4">Weather App</h1>
        <input type="text" id="locationInput" placeholder="Enter a city" className="border border-gray-300 rounded px-4 py-2 mr-2"/>
        <button id="searchButton" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Search</button>
        <div className="margin-top-20px" >
            <h2 id="location"></h2>
            <p id="temperature"></p>
            <p id="description"></p>
        </div>
        <script src="WeatherAPi.ts"></script>
    </div>
  )
}

export default WeatherPage