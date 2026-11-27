import 'dotenv/config';
import app from './app.js';
if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32 || process.env.JWT_SECRET.startsWith('replace-with')) { console.error('Не задан JWT_SECRET в .env'); process.exit(1); }
const PORT = Number(process.env.PORT || 3000);
app.listen(PORT, () => console.log(`AgroMarket API запущен: http://localhost:${PORT}`));
