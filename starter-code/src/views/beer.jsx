import React, { Component } from "react";
import APIHandler from "./../api/Handler";
// import { Link } from "react-router-dom";

const api = new APIHandler();

export default class beers extends Component {
  state = {
    beer: null,
  };
  componentDidMount() {
    api
      .get(`/beers/${this.props.match.params.id}`)
      .then(apiRes => {
        this.setState({ beer: apiRes.data });
        console.table(this.state.beer);
      })
      .catch(apiErr => console.error(apiErr));
  }

  //   beerClicked = (e) => console.log(e.target.id)
  //   onClick={(e) => e.target.id ? this.beerClicked(e) :""}

  render() {

      return (
        this.state.beer ? 
        <div className="beer-box flex">
            <img id={this.state.beer._id} src={this.state.beer.image_url} alt={this.state.beer.name + " image"} />
        <div>
          <h2 id={this.state.beer._id} className="name">
            {this.state.beer.name}
          </h2>
          <h3 id={this.state.beer._id} className="tagline">
            {this.state.beer.tagline}
          </h3>
          <p>{this.state.beer.first_brewed}</p>
          <p>{this.state.beer.attenuation_level}</p>
          <p>{this.state.beer.description}</p>
          <p className="contibuted">{this.state.beer.contributed_by
                    ? this.state.beer.contributed_by.substring(
                        0,
                        this.state.beer.contributed_by.search("<") - 1
                      )
                    : ""}</p>
          </div>
          </div>
          : <h1>Wait baby</h1>




      )
      }
        

  }
