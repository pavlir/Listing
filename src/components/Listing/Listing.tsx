import React from 'react'
import { Item } from '../../components/Item/Item'

interface MainImage {
  url_570xN: string
}

interface Item {
  listing_id: number;
  url: string;
  MainImage: MainImage;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

interface ListingProps {
  items: Item[];
}

export const Listing = ({items = []}: ListingProps) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item
          key={item.listing_id}
          url={item.url}
          MainImage={item.MainImage}
          title={item.title}
          currency_code={item.currency_code}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  )
}
