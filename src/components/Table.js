const Table = ({data, headers}) => {
    return <table>
        <thead>
        <tr>
            {headers.map(header => <td key={header}>{header.name}</td>)}
        </tr>
        </thead>
        <tbody>
        {data.map(row => <tr key={row}>
            {headers.map(header => <td
                key={`${row}-${header}`}>{header.drawFunction ? header.drawFunction(row) : row[header.value]}</td>)}
        </tr>)}
        </tbody>
    </table>
}
export default Table;