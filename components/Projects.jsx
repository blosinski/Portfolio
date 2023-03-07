import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import calculatorImg from '../public/assets/projects/CalculatorAppPicture.png';
import locationImg from '../public/assets/projects/LocationAppPicture.png';
import stockImg from '../public/assets/projects/StockAppPicture.png';
import uberImg from '../public/assets/projects/UberAppPicture.png';
import uiImg from '../public/assets/projects/UISlideoutAppPicture.png';
import walletImg from '../public/assets/projects/WalletAppPicture.png';
import ProjectItem from './ProjectItem';
import StockApp5 from '../public/assets/projects/StockApp5.png';
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#d43f3f]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Calculator"
            backgroundImg={calculatorImg}
            projectUrl="https://github.com/blosinski/CalculatorApp"
            tech="SwiftUI"
          />
          <ProjectItem
            title="Location Lookup"
            backgroundImg={locationImg}
            projectUrl="https://github.com/blosinski/Location-App"
            tech="Swift UIKit"
          />
          <ProjectItem
            title="Stock API Tracker"
            backgroundImg={stockImg}
            projectUrl="https://github.com/blosinski/Crypto-App"
            tech="SwiftUI"
          />
          <ProjectItem
            title="Uber 2.0"
            backgroundImg={uberImg}
            projectUrl="https://github.com/blosinski/Uber2.0"
            tech="SwiftUI"
          />
          <ProjectItem
            title="Twitter UI"
            backgroundImg={uiImg}
            projectUrl="https://github.com/blosinski/TwitterUI"
            tech="SwiftUI"
          />
          <ProjectItem
            title="Apple Wallet 2.0"
            backgroundImg={walletImg}
            projectUrl="https://github.com/blosinski/AppleWalletUI"
            tech="SwiftUI"
          />
          <ProjectItem
            title="Stock App"
            backgroundImg={StockApp5}
            projectUrl="https://github.com/blosinski/StocksApp"
            tech="SwiftUI, RESTful API"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
