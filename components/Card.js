/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Card = ({ card, handleChoice, flipped, disabled }) => {
	const handleClick = () => {
		if (!disabled) {
			handleChoice(card);
		}
	};

	return (
		<div className="game-card">
			<div className={flipped ? "flipped" : ""}>
				<img src={card.src} alt="" className="front" />
				<img
					src={"https://i.imgur.com/lfQDpfO.png"}
					alt=""
					onClick={handleClick}
					className="back"
				/>
			</div>
		</div>
	);
};
