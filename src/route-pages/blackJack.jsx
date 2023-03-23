import { useEffect, useState, useMemo } from "react"
import axios from "axios";
import { Button1 } from "./custom_components/button1";

export const BlackJack = () => {
    const [deck, setDeck] = useState({});
    const [hand, setHand] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        let config = {
            method: "get",
            url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
        }
        axios(config)
            .then(res => {
                setDeck(res.data);
                hit(2, res.data.deck_id)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function hit(count, deck_id) {
        if (gameOver) {
            return;
        }
        let config = {
            method: "get",
            url: "https://deckofcardsapi.com/api/deck/" + deck_id + "/draw/?count=" + count
        }
        axios(config)
            .then(res => {
                console.log(hand);
                setHand([...hand, ...res.data.cards])
                setScore(calculateHandValue([...hand, ...res.data.cards]))
                if (calculateHandValue([...hand, ...res.data.cards]) >= 21) {
                    setGameOver(true);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    function calculateHandValue(cards) {
        let sum = cards.reduce((acc, card) => {
            if (card.value === "KING" || card.value === "QUEEN" || card.value === "JACK") {
                return acc + 10;
            } else if (card.value === "ACE") {
                return acc;
            } else {
                return acc + parseInt(card.value);
            }
        }, 0);

        let numAces = cards.filter(card => card.value === "ACE").length;

        while (numAces > 0 && sum + 11 <= 21) {
            sum += 10;
            numAces--;
        }

        return sum + numAces; // numAces is the number of aces which are considered as 1
    }

    return (
        // crate a horisontal card deck
        <div className="bg-slate-800 relative">
            <div className="container mx-auto h-screen bg-slate-800">
                <div className="flex overflow-x-auto space-x-8 w-full snap-x snap-mandatory py-3">
                    {hand.map((card, index) => {
                        return <section key={index} className="flex-shrink-0 snap-center">
                            <div className="px-4 w-screen sm:w-72 overflow-hidden">
                                <img src={card.images["svg"]} alt={card.value} className="shadow scale-[3]" />
                            </div>
                            
                            {/* <svg xmlns="http://www.w3.org/2000/svg">
                                <image href={card.images["svg"]} width="100" height="100"
                                />
                            </svg> */}
                        </section>
                    })}
                </div>
                <h2 className={(score > 21 ? "text-red-500" : score > 17 ? "text-yellow-500" : score === 21 ? "text-green-500" : " text-slate-400") + (gameOver ? " text-6xl " : " ") + ("transition-all px-4")}>Score: {score}</h2>

            </div>
            <div className="fixed bottom-0 left-0 w-full bg-white">
                {/* create 2 buttons */}
                <div className="flex justify-evenly p-4">
                    {!gameOver && <Button1 onClick={() => { hit(1, deck.deck_id) }} color="#FF0000">Hit</Button1>}
                    <Button1 onClick={() => { setGameOver(true) }} color="#00ff00">
                        {score === 21 ? "Blackjack!" : score > 21 ? "Bust" : gameOver ? "Game Over" : "Stand"}
                    </Button1>
                </div>
            </div>
        </div>

    )
}