import React, { Component } from 'react';
import './RecommendationCardComponent.css';

export default class RecommendationCardComponent extends Component {
  
    render() {
      let rec = this.props.rec;
      console.log(rec);
      return (
        <div className="rec-card">
            {rec.type}
        </div>
      );
  }
  }
