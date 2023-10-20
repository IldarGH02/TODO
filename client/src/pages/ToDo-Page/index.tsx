import { TodoForm } from "../../widgets/ToDo-Form";
import { ToDoList } from "../../widgets/ToDo-List";
import { routeMain } from "./routes";
import { useGetTodosQuery } from "../../shared/http/todosApi";
import Loader from '../../shared/ui/Loader'

const ToDoPage = () => {
    const { data = [], isLoading } = useGetTodosQuery()

    return (
        <section className="todoPage">
            <div className="container">
                <div className="todoPage__content">
                    <TodoForm/>
                    {data ? <ToDoList
                        list={data}/> : <Loader/>}
                </div>
            </div>
        </section>
    )
}

export { routeMain }

export default ToDoPage