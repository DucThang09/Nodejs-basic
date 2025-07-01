import { Request, Response } from "express";
import { getAllUsers, getUserById, handleCreateUser, handleDeleteUser,UpdateUserById } from "services/user.service";
const getHomePage = async (req: Request, res: Response) => {
    //get USers
    const users = await getAllUsers();
    return res.render("home.ejs", {
        users: users
    });
}
const getCreateUser = (req: Request, res: Response) => {
    return res.render("create-user.ejs");
}
const postCreateUser = async (req: Request, res: Response) => {
    const { name, email, address } = req.body;
    await handleCreateUser(name, email, address);
    return res.redirect("/");
}
const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    return res.redirect("/");
}
const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserById(id);
    return res.render("view-user.ejs", {
        id:id,
        user:user
    });
}
const postUpdateUser = async (req: Request, res: Response) => {
    const { id,name,email,address } = req.body;
    const a = await UpdateUserById(id,name,email,address);
    return res.redirect("/");
}
export { getHomePage, getCreateUser, postCreateUser, postDeleteUser, getViewUser,postUpdateUser };