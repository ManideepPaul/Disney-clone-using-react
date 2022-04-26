import React, { useState } from 'react'
import './App.css'
import Landing from "./component/landing"
import Home from "./component/home"
import { stateContext } from './helpers/context'

function App() {

	const [state, setState] = useState('home');

	return (
		<div className="App">
			<stateContext.Provider value={{ state, setState }}>
				{state === 'landing' ? <Landing /> : <Home />}	
			</stateContext.Provider>
		</div>
	)
}

export default App
