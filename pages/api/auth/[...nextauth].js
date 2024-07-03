import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../libs/mongodb';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = { id: 1, name: 'User', email: 'user@example.com' };
        if (credentials?.email === 'user@example.com' && credentials?.password === 'password') {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Erreur de connexion
    verifyRequest: '/auth/verify-request', // (Vérification d'email)
    newUser: null, // (Nouvel utilisateur redirigé)
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true, // Utilisation de JSON Web Tokens pour la session
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
});
