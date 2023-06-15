import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AutenticatedPage } from './components/AutenticatedPage';
import { Layout } from './components/Layout';
import { Loading } from './components/Loading';
import { ProjectNew } from './pages/Project/New/New';
import { Info } from './pages/User/Info';
import { RecoverPassword } from './pages/User/RecoverPassword';
import { Signup } from './pages/User/SignUp';
import { Signin } from './pages/User/Signin';
const ProjectInfo = lazy(() => import("./pages/Project/Info").then(module => {
    return { default: module["ProjectInfo"] }
}));
const Proposes = lazy(() => import("./pages/Project/Proposes").then(module => {
    return { default: module["Proposes"] }
}));
const Home = lazy(() => import("./pages/Home").then(module => {
    return { default: module["Home"] }
}));

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {/* Rota Principal */}
                    <Route path="/" element={
                        <Suspense fallback={<Loading />}>
                            <Home />
                        </Suspense>
                    } />
                    {/* Rotas de Usuário */}
                    <Route path="user">
                        <Route path="signup" element={<Signup />} />
                        <Route path="signin" element={<Signin />} />
                        <Route path=":id" element={
                            <AutenticatedPage>
                                <Info />
                            </AutenticatedPage>
                        } />
                        <Route path="recoverPassword" element={<RecoverPassword />} />
                    </Route>
                    {/* Rotas de Projetos */}
                    <Route path="project">
                        <Route path="new" element={
                            <AutenticatedPage>
                                <ProjectNew />
                            </AutenticatedPage>
                        } />
                        <Route path=":id" element={
                            <Suspense fallback={<Loading />}>
                                <ProjectInfo />
                            </Suspense>
                        } />
                        <Route path="proposes" element={
                            <Suspense fallback={<Loading />}>
                                <AutenticatedPage>
                                    <Proposes />
                                </AutenticatedPage>
                            </Suspense>
                        } />
                    </Route>
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
