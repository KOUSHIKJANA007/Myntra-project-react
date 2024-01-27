import React from 'react'
import BagSummery from '../components/BagSummery'
import BagItem from '../components/BagItem';
import { useSelector } from "react-redux"
const Bag = () => {
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bag);

  const finalItems = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  })
  return (
    <>
      <main>
        <div className="bag-page">
          <div classNameName="bag-items-container">
            {finalItems.map(item => <BagItem item={item} />)}
            
          </div>
          <BagSummery/>
        </div>
      </main>
    </>
  )
}

export default Bag