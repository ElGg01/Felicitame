import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getBirthdays, getBirthday, createBirthday, deleteBirthday, updateBirthday } from '../controllers/birthdays.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createBirthdaySchema } from '../schemas/birthday.schema.js';

const router = Router();


router.get("/birthdays", authRequired, getBirthdays);
router.get("/birthdays/:id", authRequired, getBirthday);
router.post("/birthdays", authRequired, validateSchema(createBirthdaySchema), createBirthday);
router.delete("/birthdays/:id", authRequired, deleteBirthday);
router.put("/birthdays/:id", authRequired, updateBirthday);

export default router;