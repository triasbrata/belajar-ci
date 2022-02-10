import { Logger } from "./logger";
import { app, PORT, HOST } from "./app";
app.listen(PORT, HOST, () => {
  Logger.debug(`Listeing on http://localhost:${PORT}`);
});
