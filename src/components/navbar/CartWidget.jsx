import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 50px;
  margin-top: 15px
`;

const CartCount = styled.div`
  position: absolute;
  top: -15px;
  right: 15px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 10px;
`;

export const CartWidget = ({ itemCount }) => {

  return (
    <CartIconContainer>
        <FontAwesomeIcon icon={ faCartShopping } size={'lg'} color={'black'}/>
        {itemCount > 0 && <CartCount>{itemCount}</CartCount>}
    </CartIconContainer>
  )
}
