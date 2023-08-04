const express = require("express");
const { createCollection, getAllCollections, getCollectionById, deleteCollectionById } = require("../controllers/collections.js")


const router = express.Router();

router.post("/", createCollection);
router.get("/", getAllCollections);
router.get("/:collectionId", getCollectionById);
router.delete("/:collectionId", deleteCollectionById);

module.exports = router;