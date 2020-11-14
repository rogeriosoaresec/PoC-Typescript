import Express from "express";
import Cors from "cors";
import routes from "./routes";

const app = Express();

app.use(Cors());
app.use(routes);

app.listen(3333);