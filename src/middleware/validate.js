export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) return res.status(400).json({
    error: 'Ошибка валидации',
    details: result.error.issues.map((i) => ({ field: i.path.join('.'), message: i.message })),
  });
  req.body = result.data;
  next();
};
export const idParam = (req, res, next) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ error: 'Некорректный id' });
  req.params.id = id;
  next();
};
