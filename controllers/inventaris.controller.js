import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllInventaris = async (req, res) => {
  try {
    const result = await prisma.inventaris.findMany();
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

export const getInventarisById = async (req, res) => {
    try {
        const result = await prisma.inventaris.findUnique({
          where: {
            id_inventaris: Number(req.params.id),
          },
        });
        if (result) {
          res.status(200).json({
            success: true,
            data: result,
          });
        } else {
          res.status(401).json({
            success: false,
            message: "data not found",
          });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({
          msg: error,
        });
      }
    };
export const addInventaris = async (req, res) => {
  try {
    const { name, category, location, quantity } = req.body;
    const result = await prisma.inventaris.create({
      data: {
        name: name,
        category : category,
        location : location,
        quantity: quantity,
      },
    });
    res.status(200).json({
      success: true,
      message:"barang berhasil ditambahkan",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: error,
    });
  }
};

export const updateInventaris = async (req, res) => {
  try {
    const { name, category, location, quantity } = req.body;

    const dataCheck = await prisma.inventaris.findUnique({
      where: {
        id_inventaris: Number(req.params.id),
      },
    });
    if (!dataCheck) {
      res.status(401).json({
        msg: "data tidak ditemukan",
      });
    } else {
      const result = await prisma.inventaris.update({
        where: {
          id_inventaris: Number(req.params.id),
        },
        data: {
          name: name,
          category: category,
          location: location,
          quantity: quantity,
        },
      });
      res.json({
        success: true,
        message: "Barang berhasil diubah",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: error,
    });
  }
};
export const deleteInventaris = async (req, res) => {
  try {
    const result = await prisma.inventaris.delete({
      where: {
        id_inventaris: Number(req.params.id),
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
