import React from "react";
import img1 from "../../../assets/ig-img-1.jpeg";
import img2 from "../../../assets/ig-img-2.jpeg";
import img3 from "../../../assets/ig-img-3.jpeg";
import img4 from "../../../assets/ig-img-4.jpeg";
import img5 from "../../../assets/ig-img-5.jpeg";
import img6 from "../../../assets/ig-img-6.jpeg";
import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">@Captur</p>
      <div className="grid grid-cols-2 mb:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg={img1} />
        <InstagramImg socialImg={img2} />
        <InstagramImg socialImg={img3} />
        <InstagramImg socialImg={img4} />
        <InstagramImg socialImg={img5} />
        <InstagramImg socialImg={img6} />
      </div>
    </div>
  );
};

export default Instagram;
