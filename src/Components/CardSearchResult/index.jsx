import { Wrapper } from "./styles";

export default function CardShearchResult ({ cardInfos }) {

    return (
        <Wrapper>
            <img src={cardInfos.card_images[0].image_url} />
            <h2>{cardInfos.name}</h2>
            <div>
                {cardInfos.level && 
                    Array(cardInfos.level).fill("level").map((level, i) => 
                        <img key={level + i} src="https://ygoprodeck.com/wp-content/uploads/2017/01/level.png" />
                    )
                }
                <p>{cardInfos.type}</p>
                <img src={`https://ygoprodeck.com/pics/icons/race/${cardInfos.race}.png`} />
                {cardInfos.attribute && <img src={`https://ygoprodeck.com/pics/${cardInfos.attribute}.jpg`} />}
                <p>{cardInfos.desc}</p>
                {cardInfos.atk && <p>ATK/{cardInfos.atk}</p>}
                {cardInfos.def && <p>DEF/{cardInfos.def}</p>}
            </div>
        </Wrapper>
    )
}