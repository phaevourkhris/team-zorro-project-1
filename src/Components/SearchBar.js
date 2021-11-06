import React, { useState } from "react";

function SearchBar() {
  const [heading, setHeading] = useState(
    <img src="/images/side hustle.png" width="200px" alt="" />
  );

  //   const [inputValue, setInputValue] = useState("");

  let newInputValue;

  const updateInputValue = (event) => {
    newInputValue = event.target.value;
  };

  const handleFormSubmit = (event) => {
    const newHeading = newInputValue;

    newHeading
      ? setHeading(newHeading)
      : setHeading(<img src="/images/side hustle.png" width="200px" alt="" />);

    event.preventDefault();
  };
  return (
    <div>
      <div>{heading}</div>
      <div>
        <form action="" method="" role="search">
          <input type="search" onChange={updateInputValue}></input>
          <button onClick={handleFormSubmit} type="submit">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
