import app from "@utils/server";
import "colors";

const PORT = process.env.PORT || 5001;

app.listen(PORT, (): void =>
  console.log(
    `GraphQL is now running on mac is awesome http://localhost:${PORT}`.magenta.italic
  )
);
