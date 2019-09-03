import React from 'react';
import '../styles/BasketItem.css';

const BasketItem = () => {
  const item = {
    id: 'Sdwch_BigMac',
    image: 'https://www.mcdonalds.ua/content/dam/Ukraine/Item_Images/thumb.Sdwch_BigMac.png',
    name: 'Бiг Мак',
    description: 'Два біфштекси з натуральної яловичини, цибуля, маринований огірок, сир “Чеддер”, свіжий салат, заправлені спеціальним соусом, у булочці з насінням сезаму.'
  };

  return (
    <div>
      <div className="basket-item">
        <img src={item.image} />
        <h2>{item.name}</h2>
        <div className="basket-item__count-wrapper">
          <button>+</button>
          <div className="basket-item__count">1</div>
          <button>-</button>

          <button className="basket-item__delete-button">×</button>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default BasketItem;