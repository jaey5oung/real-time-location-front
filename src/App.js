import React, { useState, useEffect, useRef } from "react"
import io from "socket.io-client"
import { NaverMap, Marker, NavermapsProvider, MapDiv } from "react-naver-maps"

const SOCKET_URL = "http://211.228.42.81:4000"

function App() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    const socket = io(SOCKET_URL)
    socket.on("location", (location) => {
      setLocation(location)
    })
    console.log(location)

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    // <div style={{ height: "100vh" }}>
    //<NavermapsProvider
    //   ncpClientId="0enwpll4w2" // 자신의 네이버 계정에서 발급받은 Client ID
    //   error={<p>Maps Load Error</p>}
    //   loading={<p>Maps Loading...</p>}
    // >
    //   {" "}
    //   <NaverMap
    //     mapDivId={"react-naver-map"}
    //     style={{
    //       width: 800, // 네이버지도 가로 길이
    //       height: 800, // 네이버지도 세로 길이
    //     }}
    //     defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
    //   >
    //     {location && (
    //       <Marker
    //         position={{ lat: location.latitude, lng: location.longitude }}
    //       />
    //     )}
    //   </NaverMap>
    // </NavermapsProvider>
    <div>
      <>d</>
    </div>
  )
}

export default App
