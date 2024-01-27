import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemAction } from '../store/itemSlice';
import { fetchStatusAction } from '../store/fetchSlice';

const FetchItems = () => {
    const fetchStatus=useSelector((store)=>store.fetchStatus);
    const dispatch=useDispatch();
    useEffect(()=>{
        if(fetchStatus.fetchDone) return;
        const controller=new AbortController;
        const signal=controller.signal;


        dispatch(fetchStatusAction.markFetchStarted());
        fetch("http://localhost:8080/items",{signal})
        .then((res)=>res.json())
        .then(({items})=>{
            dispatch(fetchStatusAction.markFetchDone());
            dispatch(fetchStatusAction.markFetchFinished());
            dispatch(itemAction.addInitialItems(items[0]));
        });
        return ()=>{
            controller.abort();
        }
    },[fetchStatus]);
  return (
    <></>
  )
}

export default FetchItems