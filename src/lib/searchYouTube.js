var searchYouTube = (options, callback) => {
  let data = 
  
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video'    
    },
    success: function(data) {
      callback(data.items);
    },
    error: function(data) {
      console.log('FAILED REQUEST: ', data);
    }
  });
};

window.searchYouTube = searchYouTube;
