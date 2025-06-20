import getConnection from "config/database";

const handleCreateUser = async (
    name: string,
    email: string,
    address: string) => {

    const connection = await getConnection();

    try {
        const sql = 'INSERT INTO `users`(`name`, `email`,`address`) VALUES (?, ?, ?)';
        const values = [name, email, address];

        const [result, fields] = await connection.execute(sql, values);
        return result;
    } catch (err) {
        console.log(err);
        return [];
    }
}
const getAllUsers = async () => {
    const connection = await getConnection();
    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `users` '
        );
        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
}
const handleDeleteUser = async (id: string) => {
    try {
        const connection = await getConnection();
        const sql = 'DELETE FROM `users` WHERE `id` = ? ';
        const values = [id];

        const [result, fields] = await connection.execute(sql, values);
        return result;
    } catch (err) { 
        console.log(err);   
    }

}
export { handleCreateUser, getAllUsers, handleDeleteUser };