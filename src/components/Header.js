import TrollFace from "../images/Troll-Face.png"

export default function Header() {
	return (
		<header className="header">
			<img className="header--img" src={TrollFace} alt=""></img>
			<h4 className="header--title">Meme Generator</h4>
			<p className="header--text">React Course - Project 3</p>
		</header>
	)
}