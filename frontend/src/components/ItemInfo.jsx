import React from 'react';

export default function ItemInfo({ title, children }) {

  return (
    <div>
      <div>
        <b style={{ opacity: 0.95 }}>
          {title}
        </b>
      </div>
      {children}
    </div>
  );
}