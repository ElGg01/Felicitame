import {z} from 'zod';

export const createBirthdaySchema = z.object({
  name: z.string({
    required_error: "El nombre es requerido"
  }),
  relationship: z.string({
    required_error: "La relacion es requerida"
  }),
  date: z.string().datetime()
});