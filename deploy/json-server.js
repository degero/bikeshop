/*
 ***Custom json-server (which sits over express.js) for mock data and static react files, not for production use
 *** Use server.js to host under express.js and add a
 */

const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

let middlewares = jsonServer.defaults({
  static: path.join(__dirname, "build"),
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Simulated response time
server.use(function (req, res, next) {
  setTimeout(next, 1500);
});

// Add createdAt to all POSTS
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.post("/bikes/", function (req, res, next) {
  const error = validateBike(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.slug = createSlug(req.body.manufacturer + " " + req.body.model); // Generate a slug for new courses.
    next();
  }
});

// Use default router
server.use("/api", router);
// Setup server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

// Returns a URL friendly slug for bikes
function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

// server side validation for bike save/updated
function validateBike(bike) {
  if (!bike.manufacturer) return "Manufacturer is required.";
  if (!bike.model) return "Model is required.";
  if (!bike.price) return "Price is required.";
  return "";
}
