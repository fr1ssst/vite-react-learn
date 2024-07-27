const prices=[
    3.4334343, 5.34343434, 9.1213123123, 834.43343, 43,
]
const PricesList = () =>{
    return(
        <div className="align-left no-margin">
            <h1>Prices List</h1>
            <ul className="list-circle-style">
                {prices.map((item) => (
                <li key={item}>
                    {item} {"=====>"} {item.toFixed(2)}
                </li>
                ))}
            </ul>
        </div>
    );
}
export default PricesList;