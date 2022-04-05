{
  type Video = {
    id: number;
    title: string;
    data: object;
  }

  type VideoData = Omit<Video, 'title'>;
  // Video 타입 중에서 'title'만 제거하고 새로운 타입을 만든다. 

  function getVideoData(id: number): VideoData {
    return {
      id: 3,
      data: {}
    }
  }
}