const express = require ("express");
const { createArtwork, getAllArtwork, getArtworkById,deleteArtworkById, updateArtwork } = require("../controllers/artwork.js")


const router = express.Router();

router.post("/", createArtwork);
router.get("/", getAllArtwork);
router.get("/:artworkId", getArtworkById);
router.delete("/:artworkId", deleteArtworkById);
router.put("/:artworkId", updateArtwork);
// router.post("/:artworkId/upload-image",uploadArtworkImage);

module.exports = router;