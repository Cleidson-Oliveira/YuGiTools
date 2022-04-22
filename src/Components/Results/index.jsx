import { Wrapper, Content, Graph, Candle } from "./styles";
import { UniqueKey } from "../../utilities/General";

import { Colors } from "../../styles";

const candleColors = {
    cardsAmountInTheHand: Colors.color1,
    default: Colors.color2
}

export default function Results ({ result }) {
    let { nome, handelingResult, qtdHand } = result;
    return (
        <Wrapper>
            <Content>
                <p>{nome}</p>
                <Graph>
                    {handelingResult.map((value, index) => (
                        <Candle 
                            key={UniqueKey()} 
                            candleHeight={parseInt(value)+1}
                            bg={index == qtdHand 
                                ? candleColors.cardsAmountInTheHand 
                                : candleColors.default
                            }
                        >
                            <p>{value+'%'}</p>
                            <p>{index}</p>
                        </Candle>
                    ))}
                </Graph>
            </Content>
        </Wrapper>
    )
}