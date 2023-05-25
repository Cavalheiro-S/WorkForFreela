
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ProjectNew } from './pages/Project/New'
import { Info } from './pages/User/Info'
import { Signin } from './pages/User/Signin'
import { Signup } from './pages/User/Signup'
import { ProjectInfo } from './pages/Project/Info'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="user/signup" element={<Signup />} />
                    <Route path="user/signin" element={<Signin />} />
                    <Route path="user/:id" element={<Info />} />
                    <Route path="project/new" element={<ProjectNew />} />
                    <Route path="project/:id" element={<ProjectInfo />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
