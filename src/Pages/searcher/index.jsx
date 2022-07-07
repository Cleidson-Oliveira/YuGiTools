import { useEffect, useState } from "react";

import { BiUpArrow } from "react-icons/bi"

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Button, RoundedButton, Title } from "../../Components/Layout"
import { ButtonConteiner, Card, Wrapper } from "./style";

export default function CardSearcher () {

    const [cardList, setCardList] = useState([]);
    const [amountCardsOnList, setAmountCardsOnList] = useState(100);

    useEffect(() => {
        getCardsInfo()
    }, [])

    const getCardsInfo = async () => {
        const data = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
        const dataJson = await data.json();
        console.log(dataJson.data[0])

        setCardList(dataJson.data);
    }

    const handlerCards = () => {
        setAmountCardsOnList(prevState => prevState + 50)
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
                {cardList.length >= 0 && cardList.map((card, index) => {
                    if (index < amountCardsOnList) {
                        return (
                            <Card key={card.name}>
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
                position={
                    {
                        position: "fixed",
                        bottom: "3rem",
                        right: "3rem"
                    }
                }
                onClick={() => {scrollUp()}}>
                <BiUpArrow />
            </RoundedButton>

            <Footer />
        </>
    )
}