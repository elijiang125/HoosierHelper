import React, { Component } from "react";
import "./Page.css";

interface PageProps {
  children: React.ReactNode;
}

class Page extends Component<PageProps> {
  render() {
    return (
      <div className="bg-green-700 pagesContainer">
        {this.props.children}
      </div>
    );
  }
}

export default Page;
