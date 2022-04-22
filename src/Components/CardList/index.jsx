//UTILITIES MODULES
import { UniqueKey } from "../../utilities/General";

//STYLES
import { Wrapper, CardItem, ButtonDelete, ButtonCalc, Indicator } from "./styles";

//ICONS
import { AiOutlineDelete } from "react-icons/ai";
import { ImCheckmark } from "react-icons/im";

//IMAGES
import hand from "../../Images/handIcon.png"
import deck from "../../Images/deckIcon.png"

export default function CardList (props) {
    let { cardList, removeCardFromList, handAndDeckStatus, calc, inicialDeck, inicialHand } = props;

    return (
        <Wrapper>

            <CardItem>
                <div>
                    <p>NOME</p>
                </div>
                <div></div>
                <div>
                    <Indicator bg={deck}/>
                    <Indicator bg={hand}/>
                </div>
                                    
            </CardItem>
            
            {cardList.map(({ nome, qtdDeck, qtdHand, id }) => (
                <CardItem
                    key={UniqueKey()}
                    id={id}
                >
                    <div>
                        <p>{`${nome}`}</p>
                    </div>
                    <div>
                        <ButtonDelete onClick={() => {removeCardFromList(id)}}>
                            <AiOutlineDelete/>
                        </ButtonDelete>
                        <ButtonCalc onClick={() => {calc(id)}}>
                            <ImCheckmark/>
                        </ButtonCalc>
                    </div>
                    <div>
                        <Indicator bg="none"><p>{qtdDeck}/{inicialDeck}</p></Indicator>
                        <Indicator bg="none"><p>{qtdHand}/{inicialHand}</p></Indicator>
                    </div>
                    
                </CardItem>
            ))}
                
        </Wrapper>
    )
}