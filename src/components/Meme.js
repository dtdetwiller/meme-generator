import { useState } from "react"
import memesData from "../memesData"

export default function Meme() {

	const [meme, setMeme] = useState({
		topText: "", 
		bottomText: "", 
		randomImage: "https://i.imgflip.com/30b1gx.jpg"
	})

	const [allMemeImages, setAllMemeImages] = useState(memesData)
	
	// Returns a random meme image from the memesData file
	function getMemeImage() {

		const memesArr = memesData.data.memes
		const count = memesArr.length
		const randIndex = Math.floor(Math.random() * count)
		const url = memesArr[randIndex].url

		setMeme(function(prevMeme) {
			return {
				...prevMeme,
				randomImage: url
			}
		})
	}

	return (
		<main>
			<div className="form">
				<input 
					type="text"
					className="form--input-1" 
					placeholder="Top text"
				/>
				<input 
					type="text" 
					className="form--input-2" 
					placeholder="Bottom text"
				/>
				<button 
					className="form--button"
					onClick={getMemeImage}
				>
					Get a new meme image 🖼
				</button>
			</div>
			<img className="meme--image" src={meme.randomImage}></img>
		</main>
	)
}