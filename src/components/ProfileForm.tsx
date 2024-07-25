// import React from 'react';

// type ProfileFormData = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   profilePicture: string;
// };

// const ProfileForm: React.FC = () => {
//   const { register, handleSubmit, errors } = useForm<ProfileFormData>();

//   const onSubmit = async (data: ProfileFormData) => {
//     const user = auth.currentUser;
//     if (user) {
//       await db.collection('users').doc(user.uid).update(data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="firstName" ref={register({ required: true })} placeholder="First Name" />
//       {errors.firstName && <span>First Name is required</span>}
//       <input name="lastName" ref={register({ required: true })} placeholder="Last Name" />
//       {errors.lastName && <span>Last Name is required</span>}
//       <input name="email" ref={register({ required: true })} placeholder="Email" />
//       {errors.email && <span>Email is required</span>}
//       <input name="profilePicture" ref={register} placeholder="Profile Picture URL" />
//       <button type="submit">Save Profile</button>
//     </form>
//   );
// };

// export default ProfileForm;
