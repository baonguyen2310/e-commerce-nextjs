'use client'

import { useState, useEffect } from "react"

const Weather = () => {
    const [temperature, setTemperature] = useState(0)

    const fetchWeather = async () => {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=11.31&longitude=106.0983&current=temperature_2m')
        const data = await response.json()
        setTemperature(data.current.temperature_2m)
    }

    useEffect(() => {
        fetchWeather()
        const intervalId = setInterval(() => {
            fetchWeather()
        }, 60000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <h1 className="temperature">Nhiệt độ: {temperature}</h1>
    )
}

export default Weather