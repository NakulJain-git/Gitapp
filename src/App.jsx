import { use, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import UserCard from './components/UserCard'
import Home from './pages/Homepage'
function App() {
    const [user, setUser] = useState('')
    const [userData, setUserData] = useState(null)
    const [repos, setRepos] = useState([])
    // nakuljain-git
    if(userData!=null) console.log(userData.avatar_url);
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home user={user} setUser={setUser}  userData={userData} setUserData={setUserData} repos={repos} setRepos={setRepos}/>} />
          <Route path="/user/:id" element={<UserCard userData={userData} repos={repos}/>} />
          </Route>
        </Routes>
      </main>

    </>
  )
}

export default App
