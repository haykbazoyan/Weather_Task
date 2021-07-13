export default function Weather(predictions) {
    return (
        <div>
        <h1>Weather</h1>
        {predictions.map(({ weekDay, temp, icon: Icons }) => (
            <div key={weekDay}>
            <h2>{weekDay}</h2>
            <Icons />
            <p>{temp}</p>
            </div>
        ))}
        </div>
    )
}