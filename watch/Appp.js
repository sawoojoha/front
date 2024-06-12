import React from 'react';
import YouTube from 'react-youtube';

class Appp extends React.Component {
  _onReady(event) {
    // 플레이어 준비 시 실행될 콜백 함수
    event.target.playVideo();
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // 재생 속도 설정 등 플레이어 옵션 설정
        autoplay: 1,
      },
    };

    return (
      <YouTube
        videoId="https://www.youtube.com/watch?v=uWSaJJ9UEm8" // 실제 YouTube 동영상의 ID로 변경
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
}

export default Appp;
