import React from 'react';

const RiskMitigation = ({ risks }) => {
  return (
    <div className="risk_project-details">
      {risks?.map((item, index) => (
        <div key={index} className="risk_project-details__item">
          <h5>Risk {index + 1}</h5>
          <p><strong>Risk:</strong> {item.risk}</p>
          <p><strong>Mitigation:</strong> {item.mitigation}</p>
        </div>
      ))}
    </div>
  );
};

export default RiskMitigation;
