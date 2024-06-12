import React from 'react';
import { formatDate } from '../utils/utils';
import { useSetRecoilState } from 'recoil';
import { isEditingState, modalActivceState } from '../recoil/channel';
import {useNavigate } from "react-router-dom";
const VideoList = ({ video, setSelectedVideo }) => {
  const navigate = useNavigate();
  const  setActive= useSetRecoilState(modalActivceState)
const isSetEditing = useSetRecoilState(isEditingState)

function formatDate(dateArray) {
  // 배열에서 앞의 세 개의 요소를 추출합니다.
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];

  // 월과 일이 한 자리 수인 경우 앞에 0을 붙입니다.
  const formattedMonth = month < 10 ? '0' + month : month;
  const formattedDay = day < 10 ? '0' + day : day;

  // YYYY.MM.DD 형식의 문자열로 반환합니다.
  return `${year}.${formattedMonth}.${formattedDay}`;
}




      if(!video){
        return null;
      }
      console.log(video)
  return (
      <table className='videoList'>
          <tbody className='videoSon'>
              <tr>
                  <th><input type='checkbox' /></th>
                  <th>  <label onClick={()=> { if(video.isTemp || !video.isPublic){setActive(true); isSetEditing(true); setSelectedVideo(video);}else{navigate(`/studio/channel/video/${video.videoId}/edit`)}} }>
                    <img src={video.thumbnailUrl} alt='Video' /> <span>편집하기</span></label>     </th>
                    <th>{video.title}</th>
                    {video.isTemp === null || video.isTemp ? <th>초안</th> : video.isPublic ? <th>공개</th> : <th>비공개</th>}
                 < th>{video.views ?? 0}&nbsp;&nbsp;&nbsp;&nbsp;</th>
                 <th>{video.likeCounts ?? 0}</th>
                 <th>{formatDate(video.regDate)}</th>


              </tr>
          </tbody>
      </table>
  );
};

export default VideoList;
