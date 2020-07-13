import React from 'react';

const PawForm = () => {
  return (
    <div>
      <form action="#" className="pawForm">
        <input type="text" id="petname" placeholder="Pet's name"/>
        <input type="text" id="petbirthday" placeholder="mm/dd/yyyy"/>
        <input type="checkbox" id="sex" class="checkbox"/>
        <label htmlFor="sex" class="switch"></label>
        <input type="radio" name="spayNeutered" id="yes"/><label htmlFor="yes">Yes</label>
        <input type="radio" name="spayNeutered" id="no"/><label htmlFor="no">No</label>
        <input type="text" id="weight" placeholder="mm/dd/yyyy"/>
      </form>
    </div>
  );
};

export default PawForm;
