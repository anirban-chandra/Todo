import express from 'express';
import todo from "./db.js";
import {todoSchema, updateTodoSchema} from "./types.js";
import cors from "cors";
const app = express();


app.use(express.json());
app.use(cors());

// body {
//     "title": "Buy groceries",
//     "description": "Buy groceries from the store",
//     "completed": false
// }

app.get("/todo", async function (req, res) {
  

    const todos = await todo.find({});

    res.json({
        todos
    })
});

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = todoSchema.safeParse(createPayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong inputs"
        });
    }
    // put it in mongodb

        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: createPayload.completed
        });
        res.status(201).json({
            msg: "Todo created successfully"
        });

})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodoSchema.safeParse(updatePayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong inputs"
        });
    }

    // put it in mongodb
    await todo.updateOne(
        { _id: updatePayload.id },
        { completed : true }
    );

    res.json({
        msg: "Todo updated successfully"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});