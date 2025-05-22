import React from "react";

const PersonalData = ({
  setusername,
  setphonenum,
  setaddress,
  setlandmark,
  handlesubmit,
}) => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="border-amber-200 p-10 h-[300px] w-[500px] flex-col justify-center items-center bg-amber-100">
        <input
          type="text"
          placeholder="Username"
          className="input input-secondary mb-4"
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="input input-secondary mb-4"
          onChange={(e) => setphonenum(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          className="input input-secondary mb-4"
          onChange={(e) => setaddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Landmark"
          className="input input-secondary mb-4"
          onChange={(e) => setlandmark(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" onClick={handlesubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PersonalData;
