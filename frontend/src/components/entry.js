

export default function Entry({ entry }) {
    return (
        <div className="entry">
            <div className="entry--text">
                <h1 className="entry--landmark">{entry.landmark}</h1>
                <p className="entry--country">{entry.country}</p>
                    <span className="entry--dates">
                        <p className="entry--dates--start">{entry.datestart}</p>
                        <p className="entry--dates--end">{entry.dateend}</p>
                    </span>
                <p className="entry--description">{entry.description}</p>
            </div>
        </div>
    )
}