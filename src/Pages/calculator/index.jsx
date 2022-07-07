import { useState, useEffect } from "react";
import { HypergeometricDistribution } from "../../utilities/Math";
import { UniqueId } from "../../utilities/General";

import Header from "../../Components/Header";
import { Wrapper } from "./style";
import AddCard from "../../Components/AddCard";
import CardList from "../../Components/CardList";
import Results from "../../Components/Results";
import { Title } from "../../Components/Layout";
import { GlobalStyle } from "../../styles";
import Footer from "../../Components/Footer";

function factoryCard (nome, qtdHand, qtdDeck) {
  return {
    id: UniqueId(true),
    nome,
    qtdHand,
    qtdDeck
  }
}

export default function Calculator() {

  const [cardList, setCardList] = useState([]);
  const [handAndDeckStatus, setHandAndDeckStatus] = useState({deck : 0, hand : 0})
  const [inicialDeck, setInicialDeck] = useState(40);
  const [inicialHand, setInicialHand] = useState(5);
  const [result, setResult] = useState();
  

  useEffect(() => {
    let hand = 0;
    let deck = 0;

    cardList.map(carItem => {
      deck += parseInt(carItem.qtdDeck);
      hand += parseInt(carItem.qtdHand);
    })

    setHandAndDeckStatus({deck, hand})
  }, [cardList])

  const addCardOnList = (nome, qtdHand, qtdDeck) => {
    setCardList(() => {
      let cardListHandleling = cardList.map(cardItem => cardItem);
      cardListHandleling.push(factoryCard(nome, qtdHand, qtdDeck));

      return cardListHandleling;
    });
  }

  const removeCardFromList = (id) => {
    setCardList(() => {
      let cardListHandleling = cardList.filter(cardItem => {
        return cardItem.id != id;
      });

      return cardListHandleling;
    });
  }

  const calc = (cardId = false) => {

    if (cardId != false) {
      cardList.forEach(({id, nome, qtdDeck, qtdHand}) => {
        if (cardId == id) {
          let handelingResult = [];
          for (let i = 0; qtdDeck < inicialHand ? i <= qtdDeck : i <= inicialHand; i++) {
            handelingResult.push(HypergeometricDistribution(inicialDeck, inicialHand, qtdDeck, i).toFixed());
          }

          setResult(() => {
            return {
              nome,
              handelingResult,
              qtdHand
            }
          })
        }
      })
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Title>
          <h1>Calculadora de probabilidade</h1>
        </Title>
        <AddCard 
          addCardOnList={addCardOnList}
          inicialDeck={inicialDeck}
          inicialHand={inicialHand}
          setInicialDeck={setInicialDeck}
          setInicialHand={setInicialHand}
        />
        {!!cardList.length && <CardList 
          cardList={cardList}
          removeCardFromList={removeCardFromList}
          handAndDeckStatus={handAndDeckStatus}
          calc={calc}
          inicialDeck={inicialDeck}
          inicialHand={inicialHand}
        />}
        {result && <Results result={result}/>}
        
      </Wrapper>
      <Footer />
    </>
  )
}
