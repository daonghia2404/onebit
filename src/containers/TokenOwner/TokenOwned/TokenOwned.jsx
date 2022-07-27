import React from 'react';

import './TokenOwned.scss';

const TokenOwned = () => {
  return (
    <div className="TokenOwned">
      <table>
        <thead>
          <tr>
            <td>
              <span className="subheading">TOKEN</span>
            </td>
            <td>
              <span className="subheading">BALANCE</span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="subheading">
                BTC <span>$21,000</span>
              </span>
              <span className="subheading">Bitcoin</span>
            </td>
            <td>
              <span className="subheading">0.5 BTC</span>
              <span className="subheading">
                <span>$10,500</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="subheading">
                BNB <span>$216.0475</span>
              </span>
              <span className="subheading">BNB</span>
            </td>
            <td>
              <span className="subheading">1.5 BNB</span>
              <span className="subheading">
                <span>$324</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="subheading">
                ONEB <span>$50.56</span>
              </span>
              <span className="subheading">ONEB</span>
            </td>
            <td>
              <span className="subheading">10,000 ONEB</span>
              <span className="subheading">
                <span>$50,560</span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TokenOwned;
