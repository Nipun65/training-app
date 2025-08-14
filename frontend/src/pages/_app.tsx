import '../styles/index.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [username, setUsername] = useState("Nipun Patel");
  const [registeredCourses, setRegisteredCourses] = useState(3);
  const [disableAvatar, setDisableAvatar] = useState(false);
  
  // Update registeredCourses and disableAvatar based on router state
  useEffect(() => {
    // Check if we're on the watch page with preview mode
    const isPreview = router.pathname === '/watch' && router.query.preview === 'true';
    setRegisteredCourses(isPreview ? 0 : 3);
    
    // Check if we should disable the avatar (on explored-courses page or watch page with preview)
    const shouldDisableAvatar = router.pathname === '/explored-courses' ||
                                (router.pathname === '/watch' && router.query.preview === 'true');
    setDisableAvatar(shouldDisableAvatar);
  }, [router.pathname, router.query.preview]);
  
  // Check if we should show the header (not on home page or explored-courses page)
  const showHeader = router.pathname !== '/' && router.pathname !== '/explored-courses' && router.pathname !== '/learn-more';

  return (
    <div>
      {showHeader && <Header username={username} registeredCourses={registeredCourses} disableAvatar={disableAvatar} />}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;