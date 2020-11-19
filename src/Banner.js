import React, { useState } from "react";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {}
    fetchData();
  }, []);
  return (
    <header>
      {/* background image */}
      {/* title */}
      {/* div > 2 buttons */}
      {/* description */}
    </header>
  );
};

export default Banner;
