// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import ParentComponent from './ParentComponent.tsx';
import Header from './header.tsx'
import Body from './body.tsx'
import ParentBlog from "./ParentBlog.tsx";
import ParentProfile from "./ParentProfile.tsx";
function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <ParentBlog />
        <ParentProfile />
        <Body />
    </>
  )
}

export default App
