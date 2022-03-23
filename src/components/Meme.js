import { useState } from "react"
import memesData from "../memesData"

export default function Meme() {

	const [memeImage, setMemeImage] = useState("")
	
	// Returns a random meme image from the memesData file
	function getMemeImage() {

		const memesArr = memesData.data.memes
		const count = memesArr.length
		const randIndex = Math.floor(Math.random() * count)
		const url = memesArr[randIndex].url

		setMemeImage(function() {
			return url
		})
	}

	return (
		<main>
			<div className="form">
				<input 
					type="text"
					className="form--input" 
					placeholder="Top text"
				/>
				<input 
					type="text" 
					className="form--input" 
					placeholder="Bottom text"
				/>
				<button 
					className="form--button"
					onClick={getMemeImage}
				>
					Get a new meme image 🖼
				</button>
			</div>
			<img className="meme--image" src={memeImage}></img>
		</main>
	)
}