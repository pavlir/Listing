import React from 'react'

interface MainImage {
  url_570xN: string
}

interface ItemProps {
  url: string;
  MainImage?: MainImage;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

export const Item = (props: ItemProps) => {
  const {url, MainImage, title, currency_code, price, quantity} = props;

  const formatTitle = (t: string) => {
    return t?.length > 50 ? `${t.slice(0, 50)}…` : t;
  };

  const formatPrice = (p: string, cCode: string) => {
    switch (cCode) {
      case 'USD':
        return `$${p}`;
      case 'EUR':
        return `€${p}`;
      default:
        return `${p} ${cCode}`;
    }
  };

  const getQuantityClassName = (q: number) => {
    if (q <= 10) {
      return 'level-low';
    }

    if (q <= 20) {
      return 'level-medium';
    }

    return 'level-high';
  };

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage?.url_570xN} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{formatTitle(title)}</p>
        <p className="item-price">{formatPrice(price, currency_code)}</p>
        <p className={`item-quantity ${getQuantityClassName(quantity)}`}>{quantity} left</p>
      </div>
    </div>
  )
}
