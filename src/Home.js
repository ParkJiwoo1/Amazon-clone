import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="1"
          title="Learning JavaScript: The Good Parts"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg"
        />
        <Product
          id="2"
          title="keenwood kMix Stand Mixer for Baking, mixer"
          price={239}
          rating={5}
          image="https://m.media-amazon.com/images/I/61jlRmXrjuS._AC_SL1100_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="3"
          title="samsung watch"
          price={199.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="4"
          title="Amazon Echo(3rd generation) | smart speaker with Alexa, charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
        <Product
          id="5"
          title="New Apple iPad Pro(12.9-inch, Wi-Fi, 128GB)-Silver(4th Generation)"
          price={598.99}
          rating={5}
          image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-ipad-wifi-silver-2018_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1564083261220"
        />
      </div>
    </div>
  );
}

export default Home;
