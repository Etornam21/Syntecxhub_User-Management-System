// HTTP Basic Authentication middleware.
// Protects routes by checking the "Authorization: Basic <base64(username:password)>" header
// against the admin credentials configured in the environment.

const basicAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    res.set('WWW-Authenticate', 'Basic realm="User Management API"');
    return res.status(401).json({ message: 'Authentication required' });
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
  const [username, password] = credentials.split(':');

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (username === validUsername && password === validPassword) {
    return next();
  }

  res.set('WWW-Authenticate', 'Basic realm="User Management API"');
  return res.status(401).json({ message: 'Invalid credentials' });
};

module.exports = basicAuth;
