import { redirect } from 'next/navigation';

export default function Home() {
  // console.log('Home');
  redirect('/login');
  return null;
}
