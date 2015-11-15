import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './card';
import styles  from './styles.scss';
import guid from '../../utils/guid';


@DragDropContext(HTML5Backend)
class DragNDrop extends Component {
  constructor(props) {
    super(props);
    props.actions.getCards();
  }


  render() {
    const { cards, actions } = this.props;
    if (cards && cards.length) {
      return (<div className={styles.CARD_CONTAINER}>
          {cards.map((card, i) => {
            return (<Card key={guid()}
              index={i}
              id={card.id}
              text={card.text}
              moveCard={actions.moveCard}
              />);
          })}
        </div>);
    } else {
      return (<div className={styles.LOADING}> LOADING ... </div>)
    }


  }
}

export default DragNDrop;
