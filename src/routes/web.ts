import express, { Express } from "express";
import { getCreateUser, getHomePage, postCreateUser, postDeleteUser, getViewUser,postUpdateUser } from "controllers/user.controller";
import { get } from "http";

const router = express.Router();
const webRoutes = (app: Express) => {
    router.get("/", getHomePage)

    router.get("/create-user", getCreateUser);

    router.post("/handle-create-user", postCreateUser);
    router.post("/handle-delete-user/:id", postDeleteUser);
    router.get("/handle-view-user/:id", getViewUser);
    router.post("/handle-update-user/:id", postUpdateUser);
    app.use("/", router)
}

export default webRoutes

