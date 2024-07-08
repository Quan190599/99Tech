import { Router } from "express";
import { createUser, getListUsers, getUser, updateUser, deleteUser } from "../controllers";

const router = Router();
const user_path = "/users";

router.post(user_path, createUser);
router.get(user_path, getListUsers);
router.get(`${user_path}/:id`, getUser);
router.put(`${user_path}/:id`, updateUser);
router.delete(`${user_path}/:id`, deleteUser);

export const userRoutes = router;