const people = [
    { id: "1", firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', phone: '+38097435465' },
    { id: "2", firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', phone: '+38097435465' },
    { id: "3", firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', phone: '+380423454' },
    { id: "4", firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', phone: '+380954353465' },
    { id: "5", firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', phone: '+380974567645' },
    { id: "6", firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', phone: '+380976543978' },
    { id: "7", firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', phone: '+38094234253' },
    { id: "8", firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', phone: '+38097435465' },
    { id: "9", firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', phone: '+38097435465' },
    { id: "10", firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', phone: '+38097435465' },
    { id: "11", firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', phone: '+38097547698' },
    { id: "12", firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', phone: '+3809712398' },
];
const PhoneList = () => {
    return(
        <div className="align-left no-margin">
            <h1>Phone List</h1>
            <ul className="list-circle-style">
                {people.map((person, index, array) => {
                    const isLast = index === array.length - 1;

                    return(
                        <li key={person.id}>
                            {isLast && (
                                <span style={{color: "red"}}>Last person in array:</span>
                            )}
                            <div>
                                {index + 1}. {[person.firstName, " ", person.lastName]}{" ==== "}{person.phone}
                            </div>
                        </li>
                    )})}
            </ul>
        </div>
    );
}
export default PhoneList