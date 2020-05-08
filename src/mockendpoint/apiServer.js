/* json-server for dev use, see .env.development api endpoint setting */
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

const middleware = jsonServer.defaults();
server.use(middleware);

server.use(jsonServer.bodyParser);

// Slow call down 1500ms
server.use(function (req, res, next) {
  setTimeout(next, 1500);
});

server.use((req, res, next) => {
  // set a create date on post
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // TODO add updated date on PUT
  next();
});

server.post("/bikes/", function (req, res, next) {
  const error = validateBike(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.slug = createSlug(req.body.manufacturer + " " + req.body.model); // Generate a slug for new bike.
    next();
  }
});

server.use(router);

// App runs on 3000 and api on 3001
const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

// Server side validation of bike
function validateBike(bike) {
  if (!bike.manufacturer) return "Manufacturer is required.";
  if (!bike.model) return "Model is required.";
  if (!bike.price) return "Price is required.";
  return "";
}
