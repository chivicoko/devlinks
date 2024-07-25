// import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';
// import { db } from '../../../firebase';

// export default NextAuth({
//   providers: [
//     Providers.Email({
//       server: process.env.EMAIL_SERVER,
//       from: process.env.EMAIL_FROM,
//     }),
//     Providers.Google({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn(user, account, profile) {
//       if (account.provider === 'google') {
//         const userRef = db.collection('users').doc(user.id);
//         await userRef.set({
//           name: user.name,
//           email: user.email,
//           image: user.image,
//         });
//       }
//       return true;
//     },
//   },
// });
