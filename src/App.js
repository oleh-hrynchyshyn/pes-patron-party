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

	const registationLink = () => {
		window.location.href =
			"https://docs.google.com/forms/d/1y25KIel0OlkWjUH5Wl9skrxZnSOSlIRs3Jme0uVkjOY/viewform?ts=634db8ce&edit_requested=true";
	};
	return (
		<>
			{isButtonPressed ? (
				<>
					<div
						style={{
							flex: 1,
							minHeight: "100%",
							minWidth: "100%",
							backgroundImage: "url(/bg.png)",
							backgroundPosition: "center",
							backgroundSize: "100%",
							backgroundRepeat: "no-repeat",
							height: "100vh",
							position: "relative",
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
							<div
								style={{
									position: "absolute",
									width: "100%",
									bottom: "20%",
									display: "flex",
									flex: 1,
									justifyContent: "center",
								}}
							>
								<div
									className="button"
									onClick={registationLink}
									style={{ fontSize: "20px" }}
								>
									РЕЄСТРУЙСЯ!
								</div>
							</div>
						</div>
					</div>
				</>
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
							display: "flex",
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
							paddingTop: 10,
						}}
					>
						<div className="button" onClick={handleClick}>
							ТАК!
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default App;
