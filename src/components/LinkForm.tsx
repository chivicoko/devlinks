// import React from 'react';

// type LinkFormData = {
//   url: string;
//   description: string;
// };

// const schema = yup.object().shape({
//   url: yup.string().url().required('URL is required'),
//   description: yup.string().required('Description is required'),
// });

// const LinkForm: React.FC<{ linkId?: string; defaultValues?: LinkFormData }> = ({ linkId, defaultValues }) => {
//   const { register, handleSubmit, errors } = useForm<LinkFormData>({
//     resolver: yupResolver(schema),
//     defaultValues,
//   });

//   const onSubmit = async (data: LinkFormData) => {
//     if (linkId) {
//       await db.collection('links').doc(linkId).update(data);
//     } else {
//       await db.collection('links').add(data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="url" ref={register} placeholder="URL" />
//       {errors.url && <span>{errors.url.message}</span>}
//       <textarea name="description" ref={register} placeholder="Description"></textarea>
//       {errors.description && <span>{errors.description.message}</span>}
//       <button type="submit">{linkId ? 'Update' : 'Add'} Link</button>
//     </form>
//   );
// };

// export default LinkForm;
