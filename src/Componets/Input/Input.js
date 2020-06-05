import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { InputWrapper } from './Input.styled';
//adds the input
let Input = ({ newTodo }) => {
	let [ value, setValue ] = useState('');
	//just takes the event than adds value than it just resets the value to '' to clean up
	let handleSubmit = (e) => {
		e.preventDefault();
		if (value.length == 0) {
			return;
		} else {
			newTodo(value);
			setValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<InputWrapper style={{ border: '1px solid' }} value={value} onChange={(e) => setValue(e.target.value)} />
			<Button variant="outline-primary" type="submit" style={{ marginLeft: '10px' }}>
				Submit
			</Button>
		</form>
	);
};

export default Input;
