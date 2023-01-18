
import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import axios from './axios';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchVideos() {
      const response = await axios.get("/api/videos/allvideos");

      console.log(response.data.data);
      setVideos(response.data.data);


    }
    fetchVideos();

  }, []);
  // console.log(videos);

  return (
    <div className="app">

      <div className='app__videos'>
        {videos.map(video => (
          <Video url={video.url} channel={video.channel} description={video.description} song={video.song} likes={video.likes} messages={video.messages} shares={video.shares} />
        ))}

        {/* <Video url={"https://v16-webapp.tiktok.com/e262c43f3988a8ed822bd35eb92c0579/63c70be0/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oMrIC0pthfAZR4QoUIsznchyMthCEMxBZh9NAF/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3882&bt=1941&cs=0&ds=3&ft=hatGN2zOjVQ9wy9pjDhd.wAUkX4gTsU9pXtMA4YqEeC&mime_type=video_mp4&qs=0&rc=ZGk5OWZlODU6M2U4PDpnNEBpamc6eWY6ZmhyaTMzZjczM0BiNTEuMzRhXzExNTIvLTQtYSNqMmBgcjQwMS1gLS1kMWNzcw%3D%3D&l=20230117145754DCD7A22F64CB57234081&btag=80000"} channel="merab_khan" description={"description goes here ..."} song="React Killing" likes={100} messages={50} shares={50} />
        <Video url={"https://v16-webapp.tiktok.com/e262c43f3988a8ed822bd35eb92c0579/63c70be0/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oMrIC0pthfAZR4QoUIsznchyMthCEMxBZh9NAF/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3882&bt=1941&cs=0&ds=3&ft=hatGN2zOjVQ9wy9pjDhd.wAUkX4gTsU9pXtMA4YqEeC&mime_type=video_mp4&qs=0&rc=ZGk5OWZlODU6M2U4PDpnNEBpamc6eWY6ZmhyaTMzZjczM0BiNTEuMzRhXzExNTIvLTQtYSNqMmBgcjQwMS1gLS1kMWNzcw%3D%3D&l=20230117145754DCD7A22F64CB57234081&btag=80000"} channel="merab_khan" description={"description goes here ..."} song="React Killing" likes={100} messages={50} shares={50} /> */}

      </div>


    </div>
  );
}

export default App;
