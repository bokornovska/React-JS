import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Spinner from "./components/Spinner";

function App() {

	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('http://localhost:3030/jsonstore/todos')
			.then(res => res.json())
			.then(data => {
				const result = Object.keys(data).map(id => ({ id, ...data[id] }))
				setTodos(result);
				setIsLoading(false);

			})
	}, []);

	const onTodoAdd = () => {
		const lastId = Number(todos[todos.length - 1].id)
		const text = prompt('Task Name: ');
		const newTask = { id: lastId + 1, text, isCompleted: false };

		setTodos(state => [newTask, ...state])
	}

	const togglETodoStatus = (id) => {
		setTodos(state => state.map(t => t.id === id ? ({ ...t, isCompleted: !t.isCompleted }) : t))
	}
	return (

		<div>
			<Header />

			<main className="main">
				<section className="todo-list-container">
					<h1>Todo List</h1>
					<div className="add-btn-container">
						<button onClick={onTodoAdd} className="btn">+ Add new Todo</button>
					</div>
					<div className="table-wrapper">

						{isLoading
							? <Spinner />
							: <Todos todos={todos} togglETodoStatus={togglETodoStatus} />
						}
					</div>
				</section>
			</main>

			<Footer />

		</div>

	);
}

export default App;
