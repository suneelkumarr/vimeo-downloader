
function getIdFromVimeoURL(url) {
    return /(vimeo(pro)?\.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/.exec(url)[3];
  }

const start = async (url) => {
    const axios = require("axios"); // Importing the Axios module to make API requests
    const { getVideoDurationInSeconds } = require("get-video-duration");
    const videoID =  getIdFromVimeoURL(url)
    finalUrl = `https://player.vimeo.com/video/${videoID}/config`
    const getData = await axios.get(finalUrl);
    const dataUrl = getData.data.request.files.progressive[0].url;
      const duration = await getVideoDurationInSeconds(dataUrl);
     const finalObj = {
        contentLength: duration,
        videoUrl: dataUrl,
        videoId: getData.data.video.id,
        title: getData.data.video.title,
        thumbnail: getData.data.seo.thumbnail,
      };
      
    //   res
    //   .status(200)
    //   .send({ msg: "video downloaded url get", response: finalObj });
    return finalObj;
  };


  // Start function
const vimeo = async function(url) {
    const result = await start(url)
    return result
  }

module.exports = vimeo
