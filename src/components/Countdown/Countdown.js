import React, { useState, useRef, useEffect } from 'react'
import Result from '../../Pages/Result/Result';
import { Navigate, Route, Routes, useNavigate } from 'react-router';
import { Redirect } from 'react-router-dom';

const TimerFunc = () => {

	const navigate = useNavigate
	()
	
	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState('00:00:00');

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total, hours, minutes, seconds
		};
	}

	const startTimer = (e) => {
		let { total, hours, minutes, seconds } 
					= getTimeRemaining(e);
		
		
		if(total >0) {

			// update the timer
			// check if less than 10 then we need to 
			// add '0' at the beginning of the variable
			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}
	
			

	const clearTimer = (e) => {

		// If you adjust it you should also need to
		// adjust the Endtime formula we are about
		// to code next 
		setTimer('00:01:30');

		// If you try to remove this line the 
		// updating of timer Variable will be
		// after 1000ms or 1sec
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if 
		// you entend to add more time
		deadline.setSeconds(deadline.getSeconds() + 30);
		deadline.setMinutes(deadline.getMinutes( )+ 1)
		return deadline;
	}

	// We can use useEffect so that when the component
	// mount the timer will start as soon as possible

	// We put empty array to act as componentDid
	// mount only
	useEffect(() => {
		clearTimer(getDeadTime());
		setTimeout(() => {
			navigate('/result')
		  }, 90000)
	}, []);

	// Another way to call the clearTimer() to start
	// the countdown is via action event from the
	// button first we create function to be called
	// by the button
	

	return (
		<div className="App">
			<h2>{timer}</h2>
			
		</div>
	)
}

export default TimerFunc;
