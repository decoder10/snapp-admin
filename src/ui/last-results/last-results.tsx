import React from 'react';

const data = [
  {
    number: '34',
    color: 'red',
    letter: 'S',
  },
  {
    number: '34',
    color: 'black',
    letter: 'S',
  },
  {
    number: '34',
    color: 'green',
  },
  {
    number: '34',
    color: 'red',
    letter: 'S',
  },
  {
    number: '34',
    color: 'black',
    letter: 'S',
  },
  {
    number: '34',
    color: 'red',
    letter: 'S',
  },
  {
    number: '34',
    color: 'black',
    letter: 'S',
  },
  {
    number: '34',
    color: 'red',
    letter: 'S',
  },
  {
    number: '34',
    color: 'black',
    letter: 'S',
  },
  {
    number: '34',
    color: 'red',
    letter: 'S',
  },
  {
    number: '34',
    color: 'black',
    letter: 'S',
  },
  {
    number: '34',
    color: 'red',
    letter: 'S',
  },
  {
    number: '34',
    color: 'black',
    letter: 'S',
  },
];

export function LastResults() {
  return (
    <div className="last-results-wrap">
      <h2>Last results</h2>

      <div className="last-results-list">
        {data.map((item, index) => {
          return (
            <div className="list-item" key={index}>
              <div className={`number ${item.color} ${index === 0 ? 'current' : ''}`}>{item.number}</div>
              <div className="letter">{item.letter}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
