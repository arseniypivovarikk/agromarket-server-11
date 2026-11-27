import { z } from 'zod';
export const registerSchema = z.object({
  name: z.string().trim().min(2, 'Имя — минимум 2 символа').max(100),
  email: z.string().trim().toLowerCase().email('Некорректный e-mail'),
  password: z.string().min(8, 'Пароль — минимум 8 символов').max(72).refine(v => Buffer.byteLength(v, "utf8") <= 72, "Пароль — максимум 72 байта"),
});
export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email('Некорректный e-mail'),
  password: z.string().min(1).max(72).refine(v => Buffer.byteLength(v, "utf8") <= 72, "Пароль — максимум 72 байта"),
});
export const productSchema = z.object({
  name: z.string().trim().min(2).max(200),
  price: z.coerce.number().positive('Цена должна быть больше 0').max(10_000_000),
  category: z.string().trim().min(1).max(50),
  description: z.string().trim().max(1000).optional(),
  unit: z.string().trim().max(20).optional(),
  stock: z.coerce.number().int().min(0).max(1_000_000).optional(),
});
export const productUpdateSchema = productSchema.partial().refine((d) => Object.keys(d).length > 0, 'Нет полей для обновления');
