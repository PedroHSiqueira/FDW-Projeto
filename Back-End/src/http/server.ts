import fastify from "fastify";
import { createUser } from "./routes/users/create-user";
import { getUsers } from "./routes/users/get-users";
import { deleteUser } from "./routes/users/delete-user";
import { updateUser } from "./routes/users/update-user";
import { createAdmin } from "./routes/admin/create-admin";
import { getAdmins } from "./routes/admin/get-admins";
import { deleteAdmin } from "./routes/admin/delete-admin";
import { updateAdmin } from "./routes/admin/update-admin";
import { loginUser } from "./routes/authentication/login-user";
import { loginAdmin } from "./routes/authentication/admin-user";

const app = fastify();

// Rotas de Usuarios
app.register(createUser)
app.register(getUsers)
app.register(deleteUser)
app.register(updateUser)

// Rotas de Admin
app.register(getAdmins)
app.register(createAdmin)
app.register(deleteAdmin)
app.register(updateAdmin)

//Rotas Login 
app.register(loginUser)
app.register(loginAdmin)

app.listen({ port: 3000 }).then(() => {
  console.log("Server is Running!");
});
