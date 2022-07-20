import { Wrapper } from "./styles";

export default function CardShearchResult ({ cardInfos }) {
    return (
        <Wrapper>
            <img src={cardInfos.card_images[0].image_url} />
            <h2>{cardInfos.name}</h2>
            <p>{cardInfos.desc}</p>
        </Wrapper>
    )
}