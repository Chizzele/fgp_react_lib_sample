import React from 'react';
import './App.css'; 
import  {RouteWrap, Page, DevicePage, Navigation, Search, DeviceWidget} from '@chizzele-/fgp_react_lib';
import logo from './logo.svg';
import circuitImg from './images/circuit.png';
import feederImg from './images/feeder.png';
import gxpImg from './images/gxp.png';
import icpImg from './images/circuit.png';
import substationImg from './images/substation.png';
import transformerImg from './images/transformer.png';
import searchConfig from './configs/searchconfigTA.json';
import Welcome from './Welcome';
import icpConfig from './configs/icpWidgetProcessorConfig.json'


function App() {
  const navItems = [{ 
      key:"home01",
      linkTo:"/",
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
      key:"page01",
      linkTo:"/Page",
      fontAwesomeIcon:"map",
      fontAwesomeLib:"fa",
      description: "HardCode Map"
    },
    {
      key:"nwp01",
      linkTo:"/Nwp",
      fontAwesomeIcon:"plug",
      fontAwesomeLib:"fa",
      description: "Network Planning"
    }
  ]
  return (
    <div className="App">
      <RouteWrap>
        <Page 
          exact path={"/"}
        >
          <Navigation
            topNavTitle={"Compass - Home"}
            sideNavLogo={logo}
            currentPage={"/"}
            isOpen={false}
            items={navItems}
          />
          <Welcome/>

        </Page>
        <Page 
          exact path={"/Search"}
        >
          <Navigation
            topNavTitle={"Compass - Search"}
            sideNavLogo={logo}
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
        <DevicePage
          path={"/icp/"}
          baseUrl="https://compass-api.dev.welnet.co.nz/compass/"
          deviceType={"icp"}
          deviceTypeTitleCasing={"upper"}
          extensionNames={["location", "icp_ext", "icp_event_stats_ext"]}
          isLoadingNavLogo={logo}
          relationParentNames={["icp_lvcircuit", "icp_transformer"]}
          relationChildNames={["meter_icp"]}
          isLoadingNavItems={navItems}
          isLoadingNavTitle={"Compass - icp - loading"}
          mapType={"basic"}
          mapProjection={"EPSG:4326"}
          hasBreadCrumbs={true}
          breadCrumbPath={"icp->lvcircuit|->transformer->feeder->zonesub->gxp"}
          breadCrumbDeviceTypes={["icp", "lv_circuit","transformer", "feeder", "zone_sub", "gxp"]}
          breadCrumbDeviceImages={[icpImg, circuitImg, transformerImg, feederImg, substationImg, gxpImg]}
          breadCrumbDeviceUrlPaths={["icp","lvc","transformer","feeder","zone_sub","gxp"]}
        >
          <Navigation
            topNavTitle={"Compass - icp"}
            sideNavLogo={logo}
            currentPage={""}
            isOpen={false}
            items={navItems}
          />
          <DeviceWidget
            dataLink={true}
            processorConfig={icpConfig}
          />

        </DevicePage>
        <Page 
          path={"/Page"}
        >
          <Navigation
            topNavTitle={"Compass - Map Example - Hardcoded"}
            sideNavLogo={logo}
            currentPage={"/Page"}
            isOpen={false}
            items={navItems}
          />

        </Page>
        <Page
          path={"/Nwp"}
        >
          <Navigation
            topNavTitle={"Compass - Network Planning"}
            sideNavLogo={logo}
            currentPage={"/Nwp"}
            isOpen={false}
            items={navItems}
          />
        </Page>
      </RouteWrap>
    </div>
  );
}

export default App;
