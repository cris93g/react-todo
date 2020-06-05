import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from 'react-bootstrap/Button';
import { MainWrapper, ButtonWrapper, TodoWrapper } from './Main.styled';

//main function
let Main = () => {
	//setst state
	let [ todos, setTodos ] = useState([]);

	//all my functions

	let newTodo = (inp) => {
		//since how react re renders is by checkind differnces and the same array would be harder to check u would pass a new array with the new value
		let newTodos;
		setTodos((newTodos = [ ...todos, { inp } ]));
	};

	let complete = (index) => {
		//makes new array and goes inside that obj changes prop from false to true
		let newTodos = [ ...todos ];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	let remove = (index) => {
		//goes through the array and splices on the index until the next element
		let newTodos = [ ...todos ];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	//sets todos to new array
	let removeALL = () => {
		setTodos([]);
	};
	return (
		<MainWrapper className="app">
			<div>
				<ButtonWrapper style={{ style: 'flex' }}>
					<Input newTodo={newTodo} />
					<Button variant="outline-danger" style={{ marginLeft: '10px' }} onClick={removeALL}>
						ERASE ALL
					</Button>
				</ButtonWrapper>

				{/* were just maping through the entire array to display items */}
				<div>
					{todos.map((todo, index) => (
						<TodoWrapper
							className="todo"
							style={{ backgroundColor: todo.isCompleted ? 'limegreen' : 'lightyellow' }}
						>
							<h2>{todo.inp}</h2>

							<Button variant="outline-success" onClick={() => complete(index)}>
								Complete
							</Button>
							<Button variant="outline-danger" onClick={() => remove(index)}>
								DELETE
							</Button>
						</TodoWrapper>
					))}
				</div>
			</div>
		</MainWrapper>
	);
};

export default Main;
