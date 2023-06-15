import { useState, useEffect } from "react"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        async function getMemes() {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text"
                    className="form-inputs"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text"
                    className="form-inputs" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form-btn"
                    onClick={getMemeImage}
                >
                    Get a new Meme Image 🖼️
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="Meme Image" className="meme-img"/> 
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}