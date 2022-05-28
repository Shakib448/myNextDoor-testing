import app from "@utils/server";
import "colors";

const PORT = process.env.PORT || 5000;

app.listen(PORT, (): void =>
  console.log(
    `GraphQL is now running on mac http://localhost:${PORT}`.magenta.italic
  )
);
