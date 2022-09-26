// import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AuthItem from './AuthItem';
import { ImExit } from 'react-icons/im'
import { setIsLoggedIn } from '../store/actions/autorisationActions';
import { useEffect, useState } from 'react';
import useGetItems from '../apiHooks/useGetItems';
import { InfinitySpin } from 'react-loader-spinner';

const Authentificator = () => {
  const [isLoading, setIsLoading] = useState(true)
  const items = useSelector(state => state.authItems.items)
  const dispatch = useDispatch()
  const getItems = useGetItems()

  const logoutHandler = () => {
    localStorage.removeItem('token')
    dispatch(setIsLoggedIn(false))
  }

  const fetchData = () => {
    return new Promise(() => {
      getItems()
    }).then(
      setIsLoading(false)
    )
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    console.log('!!!');
    return <div className='loader'>
      <InfinitySpin
        color='#13BAED'
      />
    </div>
  } else {
    return (
      <>
        <div className='auth'>
          <h1 className='auth__title'> Authentificator</h1>
          <div className='auth__items-box'>
            <div className='auth__list'>
              {items.map(item => (
                <AuthItem key={item.id} service={item.name} passkey={item.key} />
              ))}
            </div>
          </div>
          <div className='auth__exit'>
            <ImExit
              onClick={logoutHandler}
              title='Logout'
              style={{
                fontSize: '40px',
                marginTop: '26px',
                cursor: 'pointer'
              }}
            />
          </div>
        </div>
      </>
    )
  }
}

export default Authentificator