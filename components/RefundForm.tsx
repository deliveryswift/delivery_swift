import React from "react";

function RefundForm() {
  return (
    <form>
      <div>
        <label htmlFor="trackingNumber">Tracking number</label>
        <input type="text" placeholder="DS-322395034" required />
      </div>
    </form>
  );
}

export default RefundForm;
