import React from "react";
import "./coin-card.styles.css"

export const CoinCard = ({ coin }) => {
    const formatCurrency = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format;

    return (
        <div
          className="coin-card" 
          style={{
              backgroundColor: coin.color, 
              color: coin.color && "#FFF"
          }}>
          <div className="card-header">
            <img className="coin-logo" src={coin.iconUrl} alt="coin-logo"/>
            <h1 className="coin-name">{ coin.name }</h1>
          </div>
          <div className="card-body">
            <h4>
                All-time high: { formatCurrency(coin.allTimeHigh.price) }
            </h4>
            <h4>
                24h Volume: { formatCurrency(coin.volume) }
            </h4>
            <h4>
                Market Cap: { formatCurrency(coin.marketCap) }
            </h4>
            <div className="coin-price">
                <h2>
                    { formatCurrency(Math.round(coin.price * 100)/100) }
                </h2>
            </div>
          </div>
        </div>
    );
}