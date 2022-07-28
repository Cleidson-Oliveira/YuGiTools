import { Wrapper } from "./styles";

export default function CardShearchResult ({ cardInfos }) {

    return (
        <Wrapper>
            <img src={cardInfos.card_images[0].image_url} />
            <h2>{cardInfos.name}</h2>
            <div>
                {cardInfos.level && 
                    Array(cardInfos.level).fill("level").map((level, i) => 
                        <img 
                            key={level + i}
                            src={cardInfos.type.indexOf("XYZ")
                                ? "https://ygoprodeck.com/wp-content/uploads/2017/01/level.png"
                                : "https://ygoprodeck.com/wp-content/uploads/2018/09/rank.png"
                            }
                        />
                    )
                }
                {cardInfos.scale && <p>Scale: {cardInfos.scale}</p>}
                {cardInfos.linkval && <p>Link: {cardInfos.linkval}</p>}
                {cardInfos.linkmarkers && <p>{cardInfos.linkmarkers.map(arrow => <p key={arrow}>{arrow}</p>)}</p>}
                <p>{cardInfos.type}</p>
                <img src={`https://ygoprodeck.com/pics/icons/race/${cardInfos.race}.png`} />
                {cardInfos.attribute && <img src={`https://ygoprodeck.com/pics/${cardInfos.attribute}.jpg`} />}
                <p>{cardInfos.desc}</p>
                {cardInfos.atk >= 0 && <p>ATK/ {cardInfos.atk}</p>}
                {cardInfos.def >= 0 && <p>DEF/ {cardInfos.def}</p>}
            </div>
        </Wrapper>
    )
}