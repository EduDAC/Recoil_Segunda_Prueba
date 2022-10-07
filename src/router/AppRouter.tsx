import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import { TodoList } from "../pages/TodoList"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoList />} />
                <Route path="/" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter

