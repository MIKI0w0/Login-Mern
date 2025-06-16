import { router } from "express";
import { getTask, getTasks, createTask, deleteTask, updateTask} from "../controllers/task.controllers";

const router = router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/task', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
