import 'dotenv/config'

export default {
  secret: process.env.AUTH_SECRET,
  ttl: process.env.AUTH_TTL
}
