import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Header from '../components/Header';
import './CardListPage.css';

type CardType = {
  id: number;
  cardType: string;
  cardNumber: string;
  cardOwner: string;
  expired: string;
};
const CardListPage = () => {
  const cardList = JSON.parse(localStorage.getItem('cardList') ?? '[]');

  const navigate = useNavigate();

  const onAddButton = () => {
    navigate('/add');
  };

  return (
    <div className="add-card-page">
      <Header>
        <h3>보유카드</h3>
      </Header>
      {cardList.map((card: CardType) => (
        <Card
          key={card.id}
          cardType={card.cardType}
          cardNumber={card.cardNumber}
          cardOwner={card.cardOwner}
          expired={card.expired}
        />
      ))}
      <button className="add-card-button" onClick={onAddButton}>
        +
      </button>
    </div>
  );
};

export default CardListPage;