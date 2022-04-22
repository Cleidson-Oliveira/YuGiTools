import { useState } from "react";

import { 
    Wrapper, 
    Input, 
    Button, 
    ButtonConfig, 
    CardsAmountSettings, 
    CircularButton, 
    InputNum } from "./styles";

import{ 
    AiOutlinePlus, 
    AiOutlineMinus, 
    AiOutlineSetting } from "react-icons/ai";

export default function AddCard (props) {

    let { addCardOnList, inicialDeck, inicialHand, setInicialDeck, setInicialHand } = props;

    const [cardName, setCardName] = useState('');
    const [deckValue, setDeckValue] = useState(3);
    const [handValue, setHandValue] = useState(1);
    const [config, setConfig] = useState(false)

    const handleInputValues = (value, inputHandleling) => {
        switch (inputHandleling) {
            case "CardDeck":
                parseInt(value)
                if (value >= 0) {
                    setDeckValue(value);
                }
                break;

            case "CardHand":
                parseInt(value)
                if (value >= 0) {
                    setHandValue(value)
                }
                break;
                
            case "InicialDeck":
                parseInt(value)
                if (value >= 0) {
                    setInicialDeck(value)
                }
                break;
                
            case "InicialHand":
                parseInt(value)
                if (value >= 0) {
                    setInicialHand(value)
                }
                break;

            case "CardName":
                setCardName(value)
                break;

            default:
                console.log("Hi!")
                break;
        }
    }

    const getAndSetCardInfoOnCardList = () => {
        if (cardName == ''){
            return
        }
        if (handValue <= 0 || handValue > inicialHand){
            return
        }
        if (deckValue <= 0 || deckValue > inicialDeck){
            return
        }
        
        addCardOnList(cardName, handValue, deckValue);
    }

    return (
        <Wrapper>
            <label>
                <h4>Nome do card</h4>

                <Input 
                    id="CardName"
                    placeholder="Digite o nome do card"
                    value = {cardName || ""}
                    onChange = {e => handleInputValues(e.target.value, e.target.id)}
                />
            </label>

            <label>
                <h4>Quantidade de cards</h4>

                <CardsAmountSettings>
                    <p>DECK</p>
                    <div>
                        <CircularButton
                            onClick={(e) => {
                                e.preventDefault();
                                handleInputValues(deckValue - 1, "CardDeck");
                            }}
                        >
                            <AiOutlineMinus/>
                        </CircularButton>

                        <InputNum
                            id="CardDeck"
                            type="number"
                            value={deckValue}
                            onChange={e => handleInputValues(e.target.value, e.target.id)}
                        />

                        <CircularButton
                            onClick={(e) => {
                                e.preventDefault();
                                handleInputValues(deckValue + 1, "CardDeck");
                            }}
                        >
                            <AiOutlinePlus />
                        </CircularButton>
                    </div>
                </CardsAmountSettings>

                <CardsAmountSettings>
                    <p>HAND</p>
                    <div>
                        <CircularButton
                            onClick={(e) => {
                                e.preventDefault();
                                handleInputValues(handValue - 1, "CardHand");
                            }}
                        >
                            <AiOutlineMinus/>
                        </CircularButton>

                        <InputNum
                            id="CardHand"
                            type="number"
                            value={handValue}
                            onChange={e => handleInputValues(e.target.value, e.target.id)}
                        />

                        <CircularButton
                            onClick={(e) => {
                                e.preventDefault();
                                handleInputValues(handValue + 1, "CardHand");
                            }}
                        >
                            <AiOutlinePlus />
                        </CircularButton>
                    </div>
                </CardsAmountSettings>
            </label>

            {config && <label>
                <h4>Settings</h4>
                <CardsAmountSettings>
                    <p>INICIAL DECK</p>
                    <div>
                    <CircularButton
                            onClick={(e) => {
                                e.preventDefault();
                                handleInputValues(inicialDeck - 1, "InicialDeck");
                            }}
                        >
                            <AiOutlineMinus/>
                        </CircularButton>

                        <InputNum
                            id="InicialDeck"
                            type="number"
                            value={inicialDeck}
                            onChange={e => handleInputValues(e.target.value, e.target.id)}
                        />

                        <CircularButton
                            onClick={(e) => {
                                e.preventDefault();
                                handleInputValues(inicialDeck + 1, "InicialDeck");
                            }}
                        >
                            <AiOutlinePlus />
                        </CircularButton>
                    </div>
                </CardsAmountSettings>

                <CardsAmountSettings>
                    <p>INICIAL HAND</p>
                    <div>
                    <CircularButton
                            onClick={(e) => {
                                e.preventDefault();
                                handleInputValues(inicialHand - 1, "InicialHand");
                            }}
                        >
                            <AiOutlineMinus/>
                        </CircularButton>

                        <InputNum
                            id="InicialHand"
                            type="number"
                            value={inicialHand}
                            onChange={e => handleInputValues(e.target.value, e.target.id)}
                        />

                        <CircularButton
                            onClick={(e) => {
                                e.preventDefault();
                                handleInputValues(inicialHand + 1, "InicialHand");
                            }}
                        >
                            <AiOutlinePlus />
                        </CircularButton>
                    </div>
                </CardsAmountSettings>
            </label>}

            <div>
                <Button 
                    onClick={() => getAndSetCardInfoOnCardList()}
                >
                    Adicionar
                </Button>
                <ButtonConfig 
                    onClick={() => setConfig(!config)}
                >
                    <AiOutlineSetting/>
                </ButtonConfig>
            </div>
        </Wrapper>
    )
}