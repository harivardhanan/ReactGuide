import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Person from '../components/Persons/Person/Person';

const appHooks = props => {
	
	const [PersonState,setPerson] = useState(
			{
			
			person: [
				        
				        {name: 'Max' ,age: 28},
				        {name: 'Manu', age: 30}
				        
				        ],
				}
	);
	
	const [otherState,setOtherState] = useState('SomeValue');
	
	console.log(PersonState,otherState);
	
	const switchHandler = () => {
		
		setPerson( {
		person: [
			        
			        {name: 'MaxMillan' ,age: 28},
			        {name: 'Manu', age: 35}
			        
			    ] }
				);
		
	};
	
	return(
	
	<div>
	<button onClick={switchHandler}>Click</button>
	<Person name={PersonState.person[0].name} age={PersonState.person[0].age} />
	<Person name={PersonState.person[1].name} age={PersonState.person[1].age} />
	</div>
	
	);
	
}

export default appHooks;
