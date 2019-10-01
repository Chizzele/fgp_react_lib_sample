import React from 'react';
import './App.css'; 
import  {RouteWrap, Page, Navigation, Search} from '@chizzele-/fgp_react_lib';
import logo from './logo.svg';
import searchConfig from './configs/searchconfigTA.json';
import Welcome from './Welcome';


function App() {
  const navItems = [{ 
      key:"home01",
      linkTo:"/Home",
      fontAwesomeIcon:"home",
      fontAwesomeLib:"fa",
      description: "Home"
    },
    {
      key:"Search02",
      linkTo:"/Search",
      fontAwesomeIcon:"search",
      fontAwesomeLib:"fa",
      description: "Search"
    },
    {
      key:"page02",
      linkTo:"/Page",
      fontAwesomeIcon:"map",
      fontAwesomeLib:"fa",
      description: "Page"
    }
  ]
  return (
    <div className="App">
      <RouteWrap>
        <Page 
          path={"/Home"}
        >
          <Navigation
            topNavTitle={"Compass - Home"}
            sideNavLogoPath={logo}
            currentPage={"/Home"}
            isOpen={false}
            items={navItems}
          />
          <Welcome/>

        </Page>
        <Page 
          path={"/Search"}
        >
          <Navigation
            topNavTitle={"Compass - Search"}
            sideNavLogoPath={logo}
            currentPage={"/Search"}
            isOpen={false}
            items={navItems}
          />
          <Search
            searchConfig={searchConfig}
            baseApiUrl="https://compass-api.dev.welnet.co.nz/compass/"
            title="WEL Example search"
            defaultSearchColumn="icpNumber"
            defaultSearchType="==*?*"
          />
        </Page>
        <Page 
          path={"/Page"}
        >
          <Navigation
            topNavTitle={"Compass - Change this to whatever"}
            sideNavLogoPath={logo}
            currentPage={"/Page"}
            isOpen={false}
            items={navItems}
          />
        </Page>
          
      </RouteWrap>
    </div>
  );
}

export default App;
