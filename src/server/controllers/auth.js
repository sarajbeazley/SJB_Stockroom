
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const mockUser = {
  username: "sarajbeazley",
  password: "stockroom21",
};

const login = (req, res) => {
  const { username, password } = req.body;
  
  if (username !== mockUser.username || password !== mockUser.password) {
  
    return res.status(401).json({ status: "error", message: "Invalid username or password" });
  }
  
try {
  const payload = { username }
  const token = jwt.sign(payload, secret)
  console.log(token)

  res.json({ status: "success", token })
} catch (error) {
  console.error(error)
  return res.status(500).json({ status: "error", message: "An error occurred" });
}
};

module.exports = login;

// save token to localStorage

// router.use((req, res, next) => {
//   const bearerToken = req.headers.authorization;

//   // Check if the Authorization header is present
//   if (!bearerToken) {
//     return res.status(401).json({ message: "Authorization header missing" });
//   }

//   const token = bearerToken.split(" ")[1];

//   try {
//     // Verify the token using jwt.verify
//     const decodedToken = jwt.verify(token, secret);

//     // If verification succeeds, proceed to the next middleware
//     req.user = decodedToken; // Make the decoded token available in the request object
//     next();
//   } catch (error) {
//     // If verification fails, return an error response
//     res.status(401).json({ message: "Unauthorized access" });
//   }
// });

// router.get("/admin", (req, res) => {
//   // Access to this route is granted only if the token is verified
//   res.status(200).json({ message: "Access granted to admin dashboard", user: req.user });
// });
  
  