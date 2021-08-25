import React from "react";
import FeatureBox from "./FeatureBox";
import Featureimage from "../images/feature_1.png";
import Featureimage1 from "../images/feature_2.png";
import Featureimage2 from "../images/feature_3.png";

function Feature() {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox
          image={Featureimage}
          title="What Is Cryptocurrency?"
          paragraph= " Cryptocurrency takes the form of digital assets Buyers use money to buy assets (or a part of a asset)"
        />
        <FeatureBox
          image={Featureimage1}
          title="How Does It Work?"
          paragraph="Transactions are verified using Blockchain Blockchain transactions are decentralized,

"
        />
        <FeatureBox
          image={Featureimage2}
          title="Cryptocurrency is digital money."
          paragraph=" Because it’s purely digital, there are no physical coins or
                bills tied to it."
        />
      </div>
    </div>
  );
}

export default Feature;
