import express from "express";
import cors from "cors";
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import { PORT } from "./config.js";


import distanceRoutes from "./routes/distance.routes.js"
import miatwoRoutes from "./routes/miatwo.routes.js"
import miaoneRoutes from "./routes/miaone.routes.js"
import miaonetRoutes from "./routes/miaonet.routes.js"

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname)

app.use(cors());
app.use(express.json());

app.use(distanceRoutes);
app.use(miatwoRoutes);
app.use(miaoneRoutes);
app.use(miaonetRoutes);


app.use(express.static(join(__dirname, '../client/dist')))

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
