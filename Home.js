import React, { useEffect, useState } from 'react';
import Layout from './layouts/Layout';
import { userState } from './recoil/user';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { backend_url } from './utils';

const Home = () => {
    const [user] = useRecoilState(userState);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (user && user.id) {
                try {
                    const getUser = await fetch(`${backend_url}/api/v1/video?userId=${user.id}`);
                    const response = await getUser.json();
                    console.log(response);
                    setVideos(response);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };
    
        fetchData();
    }, [user]);
console.log(user)
    return (
        <Layout>
            <p>반갑습니다1 {user && `안녕하세요 ${user.username} 님`}</p>
            <p>안녕하세요</p>
           {/* 비디오 배열을 반복하여 링크 생성 */}
         
  {
  videos.map(video => (
    <span key={video.id}>
      <Link to={`/watch?videoId=${video.videoId}`}>
        <img src={video.thumbnailUrl} className='homeVideo'></img>
      </Link>
    </span>
  ))}

        </Layout>
    );
};

export default Home;
