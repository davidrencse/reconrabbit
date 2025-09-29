// backend/src/middleware/auth.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // 1. Grab the header
  const header = req.headers.authorization; // e.g. "Bearer eyJ..."
  if (!header) {
    return res.status(401).json({ msg: 'Missing Authorization header' });
  }

  // 2. Split out the token
  const [scheme, token] = header.split(' ');
  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ msg: 'Malformed Authorization header' });
  }

  // 3. Verify the token
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // 4. Attach the user ID for downstream handlers
    req.userId = payload.id;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Invalid or expired token' });
  }
};
