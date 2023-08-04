const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const collection1 = await prisma.collections.create({
    data: {
      name: "Architectural",
    },
  });

  console.log("Collection created", collection1);

  const collection2 = await prisma.collections.create({
    data: {
      name: "Cityscapes",
    },
  });

  console.log("Collection created", collection2);

  await prisma.artwork.createMany({
    data: [
      {
        title: 'Artwork 1',
        description: 'Description of Artwork 1',
        imageUrl: 'https://example.com/image1.jpg',
        collectionId: collection1.id,
      },
      {
        title: 'Artwork 2',
        description: 'Description of Artwork 2',
        imageUrl: 'https://example.com/image2.jpg',
        collectionId: collection1.id,
      },
      {
        title: 'Artwork 3',
        description: 'Description of Artwork 3',
        imageUrl: 'https://example.com/image3.jpg',
        collectionId: collection2.id,
      },
    ],
  });

  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});