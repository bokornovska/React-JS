export default function Todo({
    id,
    text,
    isCompleted,
    togglETodoStatus
}) {
    return (
        <tr className={`todo ${isCompleted ? 'is-completed' : ''}`}>
            <td>{text}</td>
            <td>{isCompleted ? 'Complete' : 'Not Complete'}</td>
            <td className="todo-action">
                <button onClick={() => togglETodoStatus(id)} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    )
}