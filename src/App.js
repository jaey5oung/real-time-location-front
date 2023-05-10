import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import io from "socket.io-client"

const SOCKET_URL = "http://211.228.42.81:4000"

function App() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    const socket = io(SOCKET_URL)
    socket.on("location", (location) => {
      console.log("지역", location)
      setLocation(location)
    })

    return () => {
      socket.disconnect()
    }
  }, [location])

  const position = location
    ? [location.latitude, location.longitude]
    : [34.750231, 127.748656]

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
      />
      {location && (
        <Marker position={[location.latitude, location.longitude]}>
          <Popup>Current Location</Popup>
        </Marker>
      )}
    </MapContainer>
  )
}

export default App
