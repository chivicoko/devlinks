// import React from 'react';

// const fetcher = async (uid: string) => {
//   const doc = await db.collection('users').doc(uid).get();
//   return doc.data();
// };

// const ProfilePreview: React.FC = () => {
//   const user = auth.currentUser;
//   const { data: profile, error } = useSWR(user ? user.uid : null, fetcher);

//   if (error) return <div>Failed to load</div>;
//   if (!profile) return <div>Loading...</div>;

//   return (
//     <div>
//       <img src={profile.profilePicture} alt="Profile Picture" />
//       <h1>{profile.firstName} {profile.lastName}</h1>
//       <p>{profile.email}</p>
//     </div>
//   );
// };

// export default ProfilePreview;
