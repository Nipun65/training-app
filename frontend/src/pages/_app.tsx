import '../styles/index.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [username, setUsername] = useState("John Doe");
  const [registeredCourses, setRegisteredCourses] = useState(3);

  // Check if we should show the header (not on home page or explored-courses page)
  const showHeader = router.pathname !== '/' && router.pathname !== '/explored-courses' && router.pathname !== '/learn-more';
  
  // Check if we should disable the avatar (on explored-courses page or watch page with preview)
  const disableAvatar = router.pathname === '/explored-courses' ||
                       (router.pathname === '/watch' && router.query.preview === 'true');

  return (
    <div>
      {showHeader && <Header username={username} registeredCourses={registeredCourses} disableAvatar={disableAvatar} />}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;