const {
  PrismaClient,
  PrismaClientKnownRequestError,
} = require("@prisma/client");
const prisma = new PrismaClient();

const createArtwork = async (req, res) => {
  const { collectionName, title, date, size, medium, price, imageUrl } =
    req.body;

  const collection = await prisma.collections.findUnique({
    where: {
      name: collectionName,
    },
  });

  try {
    if (!collection) {
      return res.status(404).json({ error: "collection does not exist" });
    }

    const artwork = await prisma.artwork.create({
      data: {
        title: title,
        date: date,
        size: size,
        medium: medium,
        price: price,
        imageUrl: imageUrl,
        collectionId: collection.id,
      },
    });
    console.log(artwork);
    return res.status(201).json({ artwork });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return res.json({ error: "Could not create an artwork" });
      }
    }

    res.status(500).json({ error: e.message });
  }
};

const getAllArtwork = async (req, res) => {
  const artwork = await prisma.artwork.findMany({});

  return res.status(200).json({ artwork });
};

const getArtworkById = async (req, res) => {
  const { artworkId } = req.params;

  const artwork = await prisma.artwork.findUnique({
    where: {
      id: Number(artworkId),
    },
  });
  return res.status(200).json({ artwork });
};

const updateArtwork = async (req,res) => {
  const { artworkId } = req.params;
  const { title, date, size, medium, price, imageUrl } =
  req.body;

  const updatedArtwork = await prisma.customer.update({
    where: {
      id: Number(artworkId),
    },
    data: {
      title: title,
      date: date,
      size: size,
      medium: medium,
      price: price,
      imageUrl: imageUrl,
    },
     
  })
  return res.status(201).json({ artwork: updatedArtwork });
}

const deleteArtworkById = async (req, res) => {
  const id  = req.params.artworkId;

  const artwork = await prisma.artwork.delete({
    where: {
      id: Number(id),
    },
  });
  return res.status(200).json({ artwork });
};

// updateArtwork '/artwork/:artworkId'


module.exports = { createArtwork, getAllArtwork, getArtworkById, deleteArtworkById, updateArtwork };
