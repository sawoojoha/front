import React, { useEffect, useState,useRef } from 'react';
import Watchheader from '../layouts/Watchheader';
import { useSearchParams } from 'react-router-dom';
import { backend_url } from '../utils';


const VideoDetail = () => {
    const [video, setVideo] = useState(null);
    const[params] = useSearchParams();
    const videoId = params.get("videoId");
    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0); // 현재 시간 상태 추가
    const [liked, setLiked] = useState(false); // 좋아요 상태를 관리하는 상태
    

    // 좋아요 버튼 클릭 핸들러
    const handleLike = async (e) => {
        e.preventDefault()
        setLiked(!liked); // 좋아요 상태를 토글
        const response = await   fetch(`${backend_url}/api/v1/setting/${video.videoId}/likes`, {
            method: 'POST',
            body: JSON.stringify({ videoId: video.videoId }), // 수정
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data)
    };

const asdf  = async () =>{
 const response = await   fetch(`${backend_url}/api/v1/setting/${video.videoId}`, {
        method: 'POST',
        body: JSON.stringify({ videoId: video.videoId }), // 수정
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    console.log(data)
}


useEffect(()=>{
   const getData = async ()=>{
   const data =  await fetch(`${backend_url}/api/v1/video/${videoId}`, );
   const video =  await data.json();
   setVideo(video)
   if (videoRef.current) {
    // 비디오 로드가 완료되면 재생 시간을 출력
    videoRef.current.addEventListener('loadedmetadata', () => {
      console.log('비디오의 재생 시간:', videoRef.current.duration);
    });
  }
   console.log(video)};
   
getData()}, [videoId]);



if(!video){
    return null;
}






    return (
<div className="videoContainer">
    <Watchheader />
    <span>
    <video src={video?.videoUrl} autoPlay controls className='watchVideo'     allowtransparency       ref={videoRef}  />
   </span>

    <span>
          <div className='watchVideoList'>
          </div>
   </span>
   <h2>{video.title}</h2>
   <div>{video.views}</div>   <div>{video.likeCounts}</div>
   <button onClick={handleLike}>{liked ? "싫어요" : '좋아요'}</button> {/* 버튼 텍스트는 좋아요 상태에 따라 다르게 표시 */}
            <span>좋아요 수: {video.likeCounts}</span> {/* 좋아요 상태에 따라 좋아요 수 증가 또는 감소 */}
            <button onClick={asdf}>asdfas</button>
</div>

    );
};

export default VideoDetail;