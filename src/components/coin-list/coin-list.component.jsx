import React from "react";
import { CoinCard } from "../coin-card/coin-card.component";
import "./coin-list.styles.css";

export const CoinList = ({ coins }) => {
    return (
        <div className="coin-list">
            {coins.map(coin => 
                <CoinCard
                    key={ coin.uuid } 
                    coin={ coin }
                />
            )}
        </div>
    );
}