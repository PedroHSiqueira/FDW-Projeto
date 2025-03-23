import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";

function validatePassword(password: string) {
  const messages: string[] = [];

  if (password.length < 8) {
    messages.push("Error... password must be at least 8 characters long");
  }

  let lowercase = 0;
  let uppercase = 0;
  let numbers = 0;
  let symbols = 0;

  for (const char of password) {
    if (/[a-z]/.test(char)) {
      lowercase++;
    } else if (/[A-Z]/.test(char)) {
      uppercase++;
    } else if (/[0-9]/.test(char)) {
      numbers++;
    } else {
      symbols++;
    }
  }

  if (lowercase === 0 || uppercase === 0 || numbers === 0 || symbols === 0) {
    messages.push("Error... password must contain lowercase letters, uppercase letters, numbers, and symbols");
  }

  return messages;
}

export async function createUser(app: FastifyInstance) {
  app.post("/users", async (request, reply) => {
    const createUserBody = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    });

    const { name, email, password } = createUserBody.parse(request.body);

    const erros = validatePassword(password);
    if (erros.length > 0) {
      reply.status(400).send({ message: "Senha Inválida" });
      return;
    }

    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hash,
      },
    });
    return reply.status(201).send(user);
  });
}
