import { useState } from "react"
import memesData from "../memesData"

export default function Meme() {

	const [meme, setMeme] = useState({
		topText: "", 
		bottomText: "", 
		randomImage: "https://i.imgflip.com/30b1gx.jpg"
	})

	const [allMemeImages, setAllMemeImages] = useState(memesData)

	function handleChange(event) {

		const {name, value} = event.target

		setMeme(prevMeme => {
			return {...prevMeme, [name]: value}
		})
	}

	function handleSubmit(event) {
		event.preventDefault();
	}
	
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
			<form onSubmit={handleSubmit} className="form">
				<input 
					type="text"
					className="form--input" 
					placeholder="Top text"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input 
					type="text" 
					className="form--input" 
					placeholder="Bottom text"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button 
					className="form--button"
					onClick={getMemeImage}
				>
					Get a new meme image 🖼
				</button>
			</form>
			<div className="meme">
				<img src={meme.randomImage} className="meme--image" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	)
}