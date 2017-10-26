class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentVideo: exampleVideoData[1],
      videoCollection: exampleVideoData,
      searchQuery: 'cats'
    };
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search search={this.search.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div ><VideoList videos={this.state.videoCollection} 
              videoEntryClick={this.videoEntryClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
  
  videoEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  
  search(value) {
    console.log(value);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
