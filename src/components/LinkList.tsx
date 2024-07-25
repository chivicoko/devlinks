// import React from 'react';

// const fetcher = async () => {
//   const snapshot = await db.collection('links').get();
//   return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// };

// const LinkList: React.FC = () => {
//   const { data: links, error } = useSWR('links', fetcher);

//   if (error) return <div>Failed to load</div>;
//   if (!links) return <div>Loading...</div>;

//   return (
//     <ul>
//       {links.map(link => (
//         <li key={link.id}>
//           <a href={link.url}>{link.description}</a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default LinkList;
