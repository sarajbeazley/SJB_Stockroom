const {
  PrismaClient,
  PrismaClientKnownRequestError,
} = require("@prisma/client");
const prisma = new PrismaClient();

const createCollection = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      error: "Missing fields in request body",
    });
  }

  try {
    const createdCollection = await prisma.collections.create({
      data: {
        name,
      },
    });

    res.status(201).json({ collection: createdCollection });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return res
          .status(409)
          .json({
            error: "A collection with the provided name already exists",
          });
      }
    }

    res.status(500).json({ error: e.message });
  }
};

const getAllCollections = async (req, res) => {
  const collections = await prisma.collections.findMany({});

  return res.status(200).json({ collections });
};

const getCollectionById = async (req, res) => {
    const { collectionId } = req.params;

    const collection = await prisma.collections.findUnique({
      where: {
        id: Number(collectionId),
      },
    });
    return res.status(200).json({ collection });
  };

  const deleteCollectionById = async (req, res) => {
    const id  = req.params.collectionId;

    const collection = await prisma.collections.delete({
      where: {
        id: Number(id),
      },
    });
    return res.status(200).json({ collection });
  };

module.exports = { createCollection, getAllCollections, getCollectionById, deleteCollectionById };
