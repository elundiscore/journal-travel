import { useState } from 'react'


export default function Form() {
    const [country, setCountry] = useState('')
    const [landmark, setLandmark] = useState('')
    const [datestart, setDatestart] = useState('')
    const [dateend, setDateend] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    const formSubmit = async(event) => {
        event.preventDefault()

        const entry = {country, landmark, datestart, dateend, description}
        const form = await fetch('/api/entrys', {
            method: 'POST',
            body: JSON.stringify(entry),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await form.json()

        if (!form.ok) {
            setError(json.error)
        }
        if (form.ok) {
            setError(null)
            setCountry('')
            setLandmark('')
            setDatestart('')
            setDateend('')
            setDescription('')
            console.log('entry added:', json)
        }
    }
    return (
        <form className="form" onSubmit={formSubmit}>
            <h1 className="form--header">Create a new entry.</h1>
            <label className="form--label">Country</label>
            <input
                className="form--input"
                type="text"
                onChange={(event) => setCountry(event.target.value)}
                value={country}
            />

            <label className="form--label">Landmark</label>
            <input
                className="form--input"
                type="text"
                onChange={(event) => setLandmark(event.target.value)}
                value={landmark}
            />

            <label className="form--label">Start Date</label>
            <input
                className="form--input"
                type="date"
                onChange={(event) => setDatestart(event.target.value)}
                value={datestart}
            />

            <label className="form--label">End Date</label>
            <input
                className="form--input"
                type="date"
                onChange={(event) => setDateend(event.target.value)}
                value={dateend}
            />

            <label className="form--label">Description</label>
            <input
                className="form--input"
                type="text"
                onChange={(event) => setDescription(event.target.value)}
                value={description}
            />

            <button className="form--button">Submit Entry</button>
            {error && <div className="error">{error}</div>}

        </form>
    )
}
