import { Component } from "react";

class ImageComponent extends Component {
  render() {
    console.log(this.props.src);
    return <img src={this.props.src} alt="" />;
  }
}

export default ImageComponent;