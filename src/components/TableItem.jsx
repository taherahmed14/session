import "./TableItem.css";

export const TableList = ({ id, username, age, address, salary, martialStatus, department, files, deleteUser }) => {
    return (
        <div className="mainList">
            <table>
                <tbody>
                    <tr>
                        <td>{files}</td>
                        <td>{username}</td>
                        <td>{age}</td>
                        <td>{address}</td>
                        <td>{salary}</td>
                        <td>{martialStatus}</td>
                        <td>{department}</td>
                        <td>
                            <button onClick={() => deleteUser(id)} className="deletBtn">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};