import React from 'react'
// import Try from "./page/Try"
// import Footer from "./page/Footer"
//  import Image from "./page/Image"
// import Ui from "./page/ui"
// import Tab from "./page/Tab"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/home'
import Contact  from './page/contact'
import Header from './page/header'
import About from './page/about'

const App = () => {
  return (
    // <Try/>
    // <Footer/>
    // <Image/>
    // <Ui/>
    // <Tab/>
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>

    </Router>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
