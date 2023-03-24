import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {

	const ref = useRef();
	const [hobbies, setHobbies] = useState({});

	const [formValues, setFormValues] = useState({
		username: 'Pesho',
		creditCard: '',
		occupation: 'engineering',
		gender: 'male',
		bio: '',
		age: '',

	});

	useEffect(() => {
		ref.current.value = formValues.username
	}, [formValues.username])

	const onChangeHandler = (e) => {
		// console.log(ref.current.value);
		// if(e.target.name === 'username'){
		// 	ref.current.value = e.target.value;
		// }
		setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
	}


	const onHobbiesChange = (e) => {
		setHobbies(state => ({ ...state, [e.target.value]: e.target.checked }))
	}

	const onSubmit = (e) => {
		e.preventDefault();

		console.log(formValues.username);
		console.log(formValues.age);
		console.log(formValues.creditCard);
		console.log(formValues.occupation);
		console.log(formValues.gender);
		console.log(formValues.bio);
		console.log(hobbies);
	}


	return (
		<div className="App">
			<header className="App-header">
				<form onSubmit={onSubmit}>

					<div>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							value={formValues.username}
							onChange={onChangeHandler}
						/>
					</div>

					<div>
						<label htmlFor="age">Age</label>
						<input
							type="number"
							name="age"
							id="age"
							value={formValues.age}
							onChange={onChangeHandler}
						/>
					</div>

					{Number(formValues.age) > 18 && (
						<div>
							<label htmlFor="credit-card">Credit Card</label>
							<input
								type="text"
								name="credit-card"
								id="credit-card"
								value={formValues.creditCard}
								onChange={onChangeHandler}
							/>
						</div>
					)}

					<div>
						<label htmlFor="occupation">Occupation</label>
						<select
							name="occupation"
							id="occupation"
							value={formValues.occupation}
							onChange={onChangeHandler}
						>
							<option value="it">IT</option>
							<option value="engineering">Engineering</option>
							<option value="design">Design</option>
							<option value="medicine">Medicine</option>

						</select>
					</div>

					<div>
						<label htmlFor="male">Male</label>
						<input type="radio" name="gender" id="male" value="male" onChange={onChangeHandler} checked={formValues.gender === 'male'} />
						<label htmlFor="female">Female</label>
						<input type="radio" name="gender" id="female" value="female" onChange={onChangeHandler} checked={formValues.gender === 'female'} />

					</div>

					<div>
						<label htmlFor="bio">Bio</label>
						<textarea name="bio" id="bio" cols="30" rows="10" value={formValues.bio} onChange={onChangeHandler}></textarea>
					</div>

					<div>

						<label htmlFor="hiking">Hiking</label>
						<input type="checkbox" name="hobbies" id="hiking" value="hiking" onChange={onHobbiesChange} checked={hobbies['hiking'] || false} />

						<label htmlFor="reading">Reading</label>
						<input type="checkbox" name="hobbies" id="reading" value="reading" onChange={onHobbiesChange} checked={hobbies['reading'] || false} />

						<label htmlFor="running">Running</label>
						<input type="checkbox" name="hobbies" id="running" value="running" onChange={onHobbiesChange} checked={hobbies['running'] || false} />

						<label htmlFor="gaming">Gaming</label>
						<input type="checkbox" name="hobbies" id="gaming" value="gaming" onChange={onHobbiesChange} checked={hobbies['gaming'] || false} />

						<label htmlFor="coding">Coding</label>
						<input type="checkbox" name="hobbies" id="coding" value="coding" onChange={onHobbiesChange} checked={hobbies['coding'] || false} />


					</div>

					<div>
						<label htmlFor="unControlled">Uncontrolled</label>
						<input type="text" name="uncontrolled" id="uncontrolled" ref={ref}/>
					</div>

					<div>
						<input type="submit" value="Send" />
					</div>

				</form>
			</header>
		</div>
	);
}

export default App;
