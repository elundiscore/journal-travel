import { useEffect, UseEffect, useState } from 'react'
import Entry from "../components/entry.js"

export default function Journal() {
    const [entrys, setEntrys] = useState(null)

    useEffect(() => {
        const fetchEntrys = async () => {
            const response = await fetch('/api/entrys')
            const json = await response.json()
    
            if (response.ok) {
                setEntrys(json)
            }
        }

        fetchEntrys()
}, [])

    return (
        <div>
            {entrys && entrys.map((entry) => (
                <Entry key={entry._id} entry={entry} />
            ))}
        </div>
    )
}