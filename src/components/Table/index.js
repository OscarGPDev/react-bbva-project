import "./index.css"
import {useState} from "react";

const Index = ({data, headers}) => {
    const [sortingBy, setSortingBy] = useState({id: null, ascending: false, default: true});
    const defaultSortingHeader = headers.find((header) => header.orderBy);
    let tableData = data;
    const compare = (a, b, asc) => {
        if (asc) {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            }
        } else {
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1;
            }
        }
        return 0;
    };
    if (defaultSortingHeader && sortingBy.default) {
        tableData = tableData.sort((a, b) => compare(
            a[defaultSortingHeader.value],
            b[defaultSortingHeader.value],
            defaultSortingHeader.ascending));
    } else if (sortingBy.id !== null) {
        const sortingHeader = headers.find(h => h.id === sortingBy.id);
        tableData = tableData.sort((a, b) => compare(
            a[sortingHeader.value],
            b[sortingHeader.value],
            sortingBy.ascending));
    }
    const onClickSorting = (header) => {
        if (header.id !== sortingBy.id) {
            setSortingBy({id: header.id, ascending: sortingBy.ascending, default: false});
        } else {
            setSortingBy({id: header.id, ascending: !sortingBy.ascending, default: false});
        }
    }
    return <table>
        <thead>
        <tr>
            {headers?.map(header => <td key={`header-${header.id}`}
                                        onClick={() => onClickSorting(header)}>{header.name}{(
                        (header.id === sortingBy.id) || (sortingBy.default && header.orderBy)
                    ) &&
                    (sortingBy.default ?
                        header.ascending ?
                            " ↑" :
                            " ↓"
                        : sortingBy.ascending ?
                            " ↑" :
                            " ↓")
                }
                </td>
            )}
        </tr>
        </thead>
        <tbody>
        {data?.map((row, rowIndex) => <tr key={`row-${rowIndex}`}>
            {headers?.map((header, colIndex) => <td
                key={`${row.id}-${rowIndex}-${colIndex}`}>{header.drawFunction ? header.drawFunction(row) : row[header.value]}</td>)}
        </tr>)}
        </tbody>
    </table>
}
export default Index;