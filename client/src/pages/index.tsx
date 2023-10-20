import { lazy } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { routeMain as routeTodoPage} from './ToDo-Page';

const Layout = lazy(() => import('./Layout'))
const ToDo = lazy(() => import('./ToDo-Page'))

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path={routeTodoPage()} element={<ToDo/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
            </Route>
        </Routes>
    )
}