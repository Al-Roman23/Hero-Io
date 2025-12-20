import React from "react";
import Banner from "./Banner";
import Stats from "./Stats";
import OurApps from "./OurApps";

const Home = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>

      <section className="py-10 bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]">
        <Stats />
      </section>

      <section className="py-16">
        <OurApps />
      </section>
    </div>
  );
};

export default Home;
