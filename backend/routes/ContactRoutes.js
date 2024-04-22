import express from 'express';
import { createSupport} from '../controller/ContactController.js';

const contactRouter = express.Router();

contactRouter.post("/createSupport",createSupport);


export default contactRouter;



