import { useEffect, useState } from "react";

import { BiUpArrow } from "react-icons/bi"

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Button, RoundedButton, Title } from "../../Components/Layout"
import { ButtonConteiner, Card, Wrapper } from "./style";

export default function CardSearcher () {

    const [cardList, setCardList] = useState([]);
    const [cardInfos, setCardInfos] = useState(null);
    const [amountCardsOnList, setAmountCardsOnList] = useState(100);

    useEffect(() => {
        getCardList()
    }, [])
    
    useEffect(() => {
        console.log(cardInfos)
    }, [cardInfos])

    const getCardList = async () => {
        const data = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
        const dataJson = await data.json();

        setCardList(dataJson.data);
    }

    const handlerCards = () => {
        setAmountCardsOnList(prevState => prevState + 50)
    }

    const search = async (cardName) => {
        try {
            if (cardName == "") {
                throw new Error();
            }
            const data = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`);
            const dataJson = await data.json();

            setCardInfos(dataJson.data);
        } catch (err) {
            alert("Digite um nome válido")
        }

    }

    const scrollUp = () => {
        window.scroll(0, 0)
    }

    return (
        <>
            <Header />

            <Title>
                <h1>
                    Buscar cards
                </h1>
            </Title>

            <Wrapper>
                <form 
                    onSubmit={(e) => {
                        e.preventDefault()
                        search(e.target[0].value)
                    }}
                >
                    <input
                        type="text"
                        placeholder="digite o nome do card"
                    />
                    <input
                        type="submit"
                        value="Search"
                    />
                </form>
            </Wrapper>

            <Wrapper>
                {cardList.length >= 0 && cardList.map((card, index) => {
                    if (index < amountCardsOnList) {
                        return (
                            <Card 
                                key={card.name}
                                onClick={() => search(card.name)}
                            >
                                <img src={card.card_images[0].image_url}/>
                                <p>{card.name}</p>
                            </Card>
                        )
                    }
                })}
            </Wrapper>

            <ButtonConteiner>
                <Button onClick={() => {handlerCards()}}>
                    Ver mais
                </Button>
            </ButtonConteiner>

            <RoundedButton 
                position={{
                    position: "fixed",
                    bottom: "3rem",
                    right: "3rem"
                }}
                onClick={() => {scrollUp()}}
            >
                <BiUpArrow />
            </RoundedButton>

            <Footer />
        </>
    )
}