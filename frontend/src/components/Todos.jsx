/*
    todo = [
        {
            title : ""
            description : ""
        }
    ]
*/




export function Todos({ todos }) { // this way of passing todos is known as object destructuring
    return (
        <>
            {todos.map(function (todo) {
                return (
                    <div key={todo._id}>
                        <h3>{todo.title}</h3>
                        <h4>{todo.description}</h4>
                        <button onClick={() => {
                            if (!todo.completed) {
                                fetch("http://localhost:3000/completed", {
                                    method: "PUT",
                                    body: JSON.stringify({
                                        id: todo._id,
                                        completed: true
                                    }),
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                })
                                .then(async function (res) {
                                    const json = await res.json();
                                    alert(json.msg);
                                    window.location.reload();
                                });
                            }
                        }}>
                            {todo.completed === true ? "Completed" : "Mark as complete"}
                        </button>
                    </div>
                );
            })}
        </>
    );
}