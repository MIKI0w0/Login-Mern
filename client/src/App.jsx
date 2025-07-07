import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'
import TaskPage from './pages/TaskPage'
import TaskForm from './pages/TaskFormPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import ProtectedRoutes from './ProtectedRoute'
import { TaksProvider } from './context/taskContext'

function App() {
  return (
    <>
      <AuthProvider>
        <TaksProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />

              <Route element={<ProtectedRoutes />}>
                <Route path='/tasks' element={<TaskPage />} />
                <Route path='/add-task' element={<TaskForm />} />
                <Route path='/tasks/:id' element={<TaskForm />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TaksProvider>
      </AuthProvider>
    </>
  )
}

export default App
