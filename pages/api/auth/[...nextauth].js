import NextAuth from "next-auth"
import CredentialsProvider  from "next-auth/providers/credentials"


const isCorrectCredentials = (credentials) =>
  credentials.username === process.env.NEXTAUTH_USERNAME &&
  credentials.password === process.env.NEXTAUTH_PASSWORD

const options = {
  site: process.env.NEXTAUTH_URL,
  pages: {
    signIn: '/',
    signOut: '/'
  },
  providers: [
    CredentialsProvider ({
      id: 'admin-signin',
      name: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text', placeholder: 'Admin' },
        password: { label: 'password', type: 'password' }
      },
       async authorize(credentials) {
        if (isCorrectCredentials(credentials)) {
          const user = { id: 1, name: 'Admin' }
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  secret: process.env.NEXTAUTH_JWT_SECRET,
  callback: {
    async redirect({ url, baseUrl }) {
      return baseUrl
    }
  }
}

export default (req, res) => NextAuth(req, res, options)
