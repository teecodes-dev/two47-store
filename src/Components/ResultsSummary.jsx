function ResultsSummary({count, searchQuery}) {
    let summary = `Showing ${count} product${count !== 1? "s" : ""}`;
    if (searchQuery){
        summary += `for "${searchQuery}"`;
    }
    return (
        <div className="result-summary">
            <p>{summary}</p>
            {count === 0 && (
                <p className="no-result-hint">Try a different search term or category</p>
            )}
        </div>
    )
}

export default ResultsSummary