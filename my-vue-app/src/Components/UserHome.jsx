import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

function UserHome() {
  const Banner_Pictures = [
    "https://www.provimi.in/image/1432095109188/pet-page-banner-image.jpg",
    "https://www.betterwholesaling.com/wp-content/uploads/2019/06/Pet-Care.jpg",
    "https://www.redcross.org/on/demandware.static/-/Sites-RedCross-Library/default/dw8bc53abf/images/Coronavirus/2020.05.12-Caring-for-Pets-During-COVID-19-850x450.jpg",
  ];
  const [banner_img, setBannerimg] = useState(
    "https://www.redcross.org/on/demandware.static/-/Sites-RedCross-Library/default/dw8bc53abf/images/Coronavirus/2020.05.12-Caring-for-Pets-During-COVID-19-850x450.jpg"
  );
  let count = useRef(0);
  console.log(count);
  useEffect(() => {
    setInterval(() => {
      if (count.current < 3) {
        setBannerimg((prev) => {
          count.current += 1;
          return Banner_Pictures[count.current];
        });
      }
    }, 2000);
  }, []);

  return (
    <div>
      <Navbar />
      <img src={banner_img} width="100%" alt="banners" />
    </div>
  );
}

export default UserHome;
