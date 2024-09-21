import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TasksPage from './pages/TasksPage'
import HomePage from './pages/HomePage'
import TaksFormPage from './pages/TaksFormPage'
import ProfilePage from './pages/ProfilePage'

import ProtectedRoute from './ProtectedRoute.jsx'
import { TaskProvider } from './context/TasksContext.jsx'
import Navbar from './components/Navbar.jsx'


function App() {
  return(
    <AuthProvider>
      <TaskProvider>
      <BrowserRouter>
        <main className='container mx-auto px-10'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          {/* usuarios logueados */}
          <Route element={<ProtectedRoute/>}>
            <Route path='/tasks' element={<TasksPage />}></Route>
            <Route path='/add-task' element={<TaksFormPage/>}></Route>
            <Route path='/tasks/:id' element={<TaksFormPage/>}></Route>
            <Route path='/profile' element={<ProfilePage/>}></Route>
          </Route>
        </Routes>
        </main>
      </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App