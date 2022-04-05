{

  type Video = {
    id: number;
    title: string;
    data: object;
  }

  type VideoData = Pick<Video, 'id' | 'data'>;
  // Video 타입 중에서 'id'와 'data'만 추출해서 새로운 타입을 만든다. 

  function getVideoMetaData(id: number): VideoData {
    return {
      id: 3,
      data: {}
    }
  }

}