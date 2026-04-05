import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";


const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // SELL
  const [showSellModal, setShowSellModal] = useState(false);
  const [selectedSellStock, setSelectedSellStock] = useState(null);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };
   
  //sell
   const openSellWindow = (stock) => {
    setSelectedSellStock(stock);
    setShowSellModal(true);
  };

  const closeSellWindow = () => {
    setShowSellModal(false);
    setSelectedSellStock(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,

        // SELL
        showSellModal,
        selectedSellStock,
        openSellWindow,
        closeSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
       {showSellModal && <SellActionWindow uid={selectedSellStock} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
