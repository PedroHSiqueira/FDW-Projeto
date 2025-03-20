import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const router = Router();

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

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing name, email or password" });
  }

  const erros = validatePassword(password);
  if (erros.length > 0) {
    res.status(400).json({ erro: erros.join("; ") });
    return;
  }

  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt);

  try {
    const user = await prisma.administrator.create({
      data: { name, email, password: hash },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  const users = await prisma.administrator.findMany();
  res.status(200).json(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.administrator.findUnique({
    where: { id: String(id) },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing name, email or password" });
  }

  const user = await prisma.administrator.update({
    where: { id: String(id) },
    data: { name, email, password },
  });

  res.status(200).json(user);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.administrator.delete({
    where: { id: String(id) },
  });

  res.status(204).json({ message: "Super User deleted" });
});

export default router;
