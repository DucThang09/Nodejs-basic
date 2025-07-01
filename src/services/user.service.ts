import { prisma } from "config/client";
import getConnection from "config/database";

const handleCreateUser = async (
    name: string,
    email: string,
    address: string) => {

    

    await prisma.user.create({
        data: {
            name: name,
            email: email,
            address: address
        }
    })
}
const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
    
}
const handleDeleteUser = async (id: string) => {
    await prisma.user.delete({
        where: {id:+id}
    })
}
const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {id:+id}
    });
    return user;
}
const UpdateUserById = async (id: string, name: string, email: string, address: string) => {
    const updatedUser = await prisma.user.update({
        where: {id: +id},
        data: {
            name: name,
            email: email,
            address: address
        }
    });
}
export { handleCreateUser, getAllUsers, handleDeleteUser, getUserById, UpdateUserById };