import express, { Express } from "express";
import { getCreateUser, getHomePage, postCreateUser,postDeleteUser } from "controllers/user.controller";
import { get } from "http";

const router = express.Router();
const webRoutes = (app: Express) => {
    router.get("/", getHomePage)

    router.get("/create-user", getCreateUser);

    router.post("/handle-create-user",postCreateUser);
    router.post("/handle-delete-user/:id", postDeleteUser);
    app.use("/", router)
}
export default webRoutes

