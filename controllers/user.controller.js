import { PrismaClient } from "@prisma/client";
import md5 from "md5";

const prisma = new PrismaClient();

export const getAllUsers = async (req, res) => {
  try {
    const result = await prisma.user.findMany();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: message.error,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      success: true,  
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: message.error,
    });
  }
};

export const addUser = async (req, res) => {
  try {
    const { username,email, password,role } = req.body;
    const result = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: md5(password),
        role:role,
      },
    });
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: error,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { username,email, password,role } = req.body;
    const result = await prisma.user.update({
      where: {
        id_user: req.params.id,
      },
      data: {
        username: username,
        email: email,
        password: password,
        role:role,
      },
    });
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: message.error,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const result = await prisma.user.delete({
      where: {
        id_user: Number(req.params.id),
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
