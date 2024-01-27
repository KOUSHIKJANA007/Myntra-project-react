import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagAction } from '../store/bagSlice';
import { IoBagAdd } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const HomeItem = ({item}) => {
    const bag=useSelector((store)=>store.bag);
    const bagElement=bag.indexOf(item.id) >=0;
    const dispatch=useDispatch();


    const handleBagItems=()=>{
        dispatch(bagAction.addToBag(item.id));
    };
    const handleRemove=()=>{
        dispatch(bagAction.removeFromBag(item.id));
    };

    return (
        <>
            <div className="item-container">
                <img className="item-image" src={item.image} alt="item image" />
                <div className="rating">
                    {item.rating.stars} ⭐ | {item.rating.count}
                </div>
                <div className="company-name">{item.company}</div>
                <div className="item-name">{item.item_name}</div>
                <div className="price">
                    <span className="current-price">Rs {item.current_price}</span>
                    <span className="original-price">Rs {item.original_price}</span>
                    <span className="discount">({item.discount_percentage}% OFF)</span>
                </div>
                {bagElement
                 ? 
                <button type="button" class="btn btn-add-bag btn-danger" onClick={handleRemove}><MdDelete/>Remove</button> 
                 :
                    <button type="button" class="btn btn-add-bag btn-success" onClick={handleBagItems}> <IoBagAdd /> Add to Bag</button>
                }
            </div>
        </>
    )
}

export default HomeItem