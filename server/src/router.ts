import express from "express"
import { validateCardDetails } from "./middleware/validateCardDetails";
import { paymentController } from "./controller/paymentController";

const router = express.Router();


router.post('/pay', validateCardDetails, paymentController)

export default router;