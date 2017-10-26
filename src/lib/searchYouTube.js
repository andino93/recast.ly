var searchYouTube = (query, maxResults, callback) => {
  
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      maxResults: maxResults,
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

window.searchYouTube = _.debounce(searchYouTube, 500);
