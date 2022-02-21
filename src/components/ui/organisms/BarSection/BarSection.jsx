import React from 'react'
// import { FaBeer } from 'react-icons/fa'
import { ImPriceTag } from 'react-icons/im'
import { MdFastfood } from 'react-icons/md'
import './barSection.css'

function BarSection() {
  return (
    <div className="bar-section" id="bar-section">
      <div className="section-title">
        <h1>Le bar</h1>
      </div>
      <div className="bar-tables">
        {/* <table className="bar-table">
          <thead>
            <tr>
              <th>
                <FaBeer /> Boisson
              </th>
              <th>
                <ImPriceTag /> Prix
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Delirium</td>
              <td>2.75€</td>
            </tr>
            <tr>
              <td>Mort Subite</td>
              <td>2.50€</td>
            </tr>
            <tr>
              <td>Cidre Pas Pareil</td>
              <td>2.00€</td>
            </tr>
          </tbody>
        </table> */}
        <table className="bar-table">
          <thead>
            <tr>
              <th>
                <MdFastfood /> Snack
              </th>
              <th>
                <ImPriceTag /> Prix
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Menu chimichangas</td>
              <td>6.90€ - 10.90€</td>
            </tr>
            <tr>
              <td>Menu burger</td>
              <td>6.90€ - 9.90€</td>
            </tr>
            <tr>
              <td>Corn Cheese</td>
              <td>4.80€</td>
            </tr>
            <tr>
              <td>Croque Monsieur</td>
              <td>1.50€ / 2.80€ les 2</td>
            </tr>
            <tr>
              <td>Pop Corn</td>
              <td>1.70€</td>
            </tr>
            <tr>
              <td>Barbe à Papa</td>
              <td>1.00€</td>
            </tr>
            <tr>
              <td>10 churros</td>
              <td>4.00€</td>
            </tr>
            <tr>
              <td>Crêpes / Gaufres / Beignets</td>
              <td>2.00€ - 3.00€</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BarSection
