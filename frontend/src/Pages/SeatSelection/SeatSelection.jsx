import React, { useState } from 'react';
import './SeatSelection.css';

const seatsData = [
  { category: 'Gold', price: 300, rows: 1, columns: 15 },
  { category: 'Executive', price: 160, rows: 7, columns: 24 },
  { category: 'Economy', price: 110, rows: 1, columns: 18 },
];

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleSeatClick = (seat, price) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
      setTotalAmount(totalAmount - price);
    } else {
      setSelectedSeats([...selectedSeats, seat]);
      setTotalAmount(totalAmount + price);
    }
  };

  return (
    <div className="seat-selection">
      <h2>Tick Your Seats</h2>
      {seatsData.map((section, index) => (
        <div key={index} className="section">
          <h3>{section.category}: ₹{section.price}</h3>
          <div className="seat-grid">
            {[...Array(section.rows)].map((_, rowIndex) => (
              <div className="seat-row" key={rowIndex}>
                {[...Array(section.columns)].map((_, colIndex) => {
                  const seatId = `${section.category}-${rowIndex + 1}-${colIndex + 1}`;
                  const isSelected = selectedSeats.includes(seatId);
                  return (
                    <div
                      key={seatId}
                      className={`seat ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSeatClick(seatId, section.price)}
                    >
                      {colIndex + 1}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        
      ))}
       <br /><h4>Screen View Here</h4>
      <div className="total-amount">
        <h4>Total: ₹{totalAmount}</h4>
      </div>
    </div>
  );
};

export default SeatSelection;
