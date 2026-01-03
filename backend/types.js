import { z as zod } from "zod";

const todoSchema =zod.object({
    title : zod.string(),
    description : zod.string(),
    completed : zod.boolean(),
})

const updateTodoSchema =zod.object({
    id : zod.string(),
    completed : zod.boolean(),
})

export {
    todoSchema, 
    updateTodoSchema
};