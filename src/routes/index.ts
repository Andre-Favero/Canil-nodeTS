import { Router } from "express";
import * as pageController from "../controllers/PageController";
import * as SearchController from "../controllers/SearchController";

const router = Router();

router.get("/", pageController.home);
router.get("/dogs", pageController.dogs);
router.get("/cats", pageController.cats);
router.get("/fishes", pageController.fishes);

router.get("/search", SearchController.search);

export default router;
