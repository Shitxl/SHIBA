import express from "express";
const router = express.Router();
import { getAllBanners, createBanner, deleteBanner, getRandomBanner } from "../controller/banner.controller.js"


//CREATE BANNER ROUTES
router.post("/", createBanner);

//Get all banners route
router.get("/", getAllBanners);

//Delete banner route
router.delete("/:id", deleteBanner);

//get random banner route
router.get("/random", getRandomBanner);


export default router;