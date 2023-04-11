import React from 'react';
import HolyPanel from '../../assets/images/cards/grand-prix/2C10.jpg';

export const Header = () => {
  return (
    <div className='p-5'>
        <div className="float-start px-5">
            <img src={HolyPanel} alt='card of the day' style={{height: '300px'}} />
        </div>
        <div className="float-end px-5">
            <h1 className="display-4">Card of the Day</h1>
            <div className="h2">HolyPanel</div>
            <div className="fs-6">Grand Prix</div>
            <div className="fs-6">Battlechip</div>
            <div className="fs-5">Whenever you spend a resource, you may recharge an energy.</div>
        </div>
    </div>
  )
}
