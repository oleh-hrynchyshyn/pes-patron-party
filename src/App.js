import React, { useState } from "react";
import "./App.css";
import FlipCountdown from "@rumess/react-flip-countdown";

const App = () => {
	const [audio] = useState(new Audio("/sound.mp3"));
	const [isButtonPressed, setIsButtonPressed] = useState(false);
	const handleClick = () => {
		setIsButtonPressed(true);
		audio.play();
	};

	return (
		<>
			{isButtonPressed ? (
				<div
					style={{
						flex: 1,
						minHeight: "100%",
						minWidth: "100%",
						backgroundImage: "url(/bg.png)",
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						height: "100vh",
					}}
				>
					<div style={{ paddingTop: "10vh" }}>
						<FlipCountdown
							endAt={"2022-10-28 13:30:00"}
							size={"small"}
							hideYear
							hideMonth
							dayTitle={"Днів"}
							hourTitle={"Годин"}
							minuteTitle={"Хвилин"}
							secondTitle={"Секунд"}
						/>
					</div>
				</div>
			) : (
				<>
					<div
						style={{
							flex: 1,
							minHeight: "100%",
							minWidth: "100%",
							/* 	backgroundImage: "url(/bg.png)", */
							backgroundImage: "url(/start.png)",
							backgroundPosition: "center",

							backgroundRepeat: "no-repeat",
							height: "70vh",
						}}
					></div>
					<div
						style={{
							textAlign: "center",
						}}
					>
						пес Патрон їде в Славське🔥 ти з нами?
					</div>
					<div
						style={{
							textAlign: "center",
							cursor: "pointer",
						}}
						onClick={handleClick}
					>
						ТАК!
					</div>
				</>
			)}
		</>
	);
};

export default App;
