import React from "react";
import BeyCard from './BeyCard'

// class BeyContainer extends React.Component {
//   render() {
//     return (
//       <div className="index">
//         <h1>Index</h1>
//         {/*list of beys*/}
//       </div>
//     );
//   }
// }

function BeyContainer(props) {
  console.log(props)
  let allCards = props.something.map(card => <BeyCard key={card.id} obj={card} clickHandler={props.clickHandler} />)

    return (
      <div className="index">
        <h1>Index</h1>
        {allCards}
      </div>
    );
}




export default BeyContainer;
