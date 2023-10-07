import { Component } from "react";
import "./card-list.css";
import Card from "../card/card";

class CardList extends Component {
  render() {
    // console.log(`render from CardList`);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
