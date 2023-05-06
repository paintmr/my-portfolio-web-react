import React from 'react'
import lowFidelity1 from '../../../../assets/img/design-portfolio-fairy-herbal-tea-low-fidelity 1.png'
import lowFidelity2 from '../../../../assets/img/design-portfolio-fairy-herbal-tea-low-fidelity 2.png'
import styleGuide from '../../../../assets/img/design-portfolio-fairy-herbal-tea-style-guide.png'



export default function DesProject1() {
  return (
    <>
      <li><i className="fa-solid fa-circle-check"></i>
        Low fidelity design <br />
        <img src={lowFidelity1} alt="lowFidelity1" />
        <img src={lowFidelity2} alt="lowFidelity2" />
        <img src={styleGuide} alt="styleGuide" />
      </li>
    </>
  )
}
