import React from 'react';
import './App.css'; 
import  {RouteWrap, Page, DevicePage, Navigation, Search, DeviceWidget, ExternalLinkPage, FgTabs, ChildExtensionList, MultiTableFilterSearch, MultiReferenceFilterSearch} from '@chizzele-/fgp_react_lib';
import logo from './logo.svg';
import logo2 from './images/fgp-logo.png'
import circuitImg from './images/circuit.png';
import feederImg from './images/feeder.png';
import gxpImg from './images/gxp.png';
import icpImg from './images/circuit.png';
import substationImg from './images/substation.png';
import transformerImg from './images/transformer.png';
import searchConfig from './configs/searchconfigTA.json';
import MyTest from './myTest.js';
import Welcome from './Pages/Welcome';
import icpConfig from './configs/icpWidgetProcessorConfig.json';
import assetLinksConfig from './configs/assetLinks.json';
import eventSearchConfigFilterable from './configs/multiTableSearchConf.json'
import eventSearchConfigFilterableMultiRef from './configs/multiTableSearchConfMultiRef.json'
import Icp from './Pages/Icp';
import Transformer from './Pages/Transformer';


function App() {
  var isOpen = false;
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
      key:"Search03",
      linkTo:"/EventSearch",
      fontAwesomeIcon:"calendar",
      fontAwesomeLib:"fa",
      description: "Event Search"
    },
    {
      key:"ext01",
      linkTo:"/operations",
      fontAwesomeIcon:"link",
      fontAwesomeLib:"fa",
      description: "Operations"
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
            isOpen={isOpen}
            topNavTitle={"Compass - Home"}
            sideNavLogo={logo2}
            currentPage={"/"}
            items={navItems}
          />
          <Welcome/>

        </Page>
        <Icp 
          navItems={navItems}
          isOpen={isOpen}
          path={"/icp"}
        />
        <Transformer 
          navItems={navItems}
          isOpen={isOpen}
          path={"/transformer"}
        />
        <Page 
          exact path={"/Search"}
        >
          <Navigation
            isOpen={isOpen}
            topNavTitle={"Compass - Search"}
            sideNavLogo={logo2}
            currentPage={"/Search"}
            items={navItems}
          />
          <Search
            isFluid={true}
            searchConfig={searchConfig}
            baseApiUrl="https://compass-api.dev.welnet.co.nz/compass/"
            title="WEL Example search"
            defaultSearchColumn="icpNumber"
            defaultSearchType="==*?*"
            filterableResults={true}
            openInNewPage={true}
          />
        </Page>
        <Page 
          exact path={"/EventSearch"}
        >
          <Navigation
            isOpen={isOpen}
            topNavTitle={"Compass - Event Search"}
            sideNavLogo={logo2}
            currentPage={"/EventSearch"}
            items={navItems}
          />
          <MultiReferenceFilterSearch
            isFluid={false}
            searchingReferences={eventSearchConfigFilterableMultiRef.searchingReferences}
            baseApiUrl="http://localhost:8081/sapn/"
            title="Event Search"
            dateFormat={"MMM, dd, yyyy"}
            filterableResults={false}
            openInNewPage={true}
          />
        </Page>
        <ExternalLinkPage 
          title={"Operations"}
          path={"/operations"}
          isFluid={true}
          config={assetLinksConfig}
        >
          <MyTest
            navItems={navItems}
            isOpen={isOpen}
            logo={logo2}

          >

          </MyTest>
          
        </ExternalLinkPage>
        <DevicePage
          isFluid={false}
          isBefore1910={true}
          path={"/feeder/"}
          baseUrl="https://compass-api.dev.welnet.co.nz/compass/"
          deviceType={"feeder"}
          deviceTypeTitleCasing={"camel"}
          extensionNames={["location", "feeder_ext"]}
          isLoadingNavLogo={logo2}
          // relationParentNames={["icp_lvcircuit", "icp_transformer"]}
          relationChildNames={["transformer_feeder"]}
          isLoadingNavItems={navItems}
          isLoadingNavTitle={"Compass - feeder - loading"}

          mapType={"basic"}
          mapProjection={"EPSG:4326"}
          mapParentColors={{fillColor: "lightblue", borderColor : "blue"}}
          mapChildrenColors={[{fillColor: "pink", borderColor : "red"}]}

          hasBreadCrumbs={true}
          breadCrumbPath={"feeder->zonesub->gxp"}
          breadCrumbDeviceTypes={["feeder", "zone_sub", "gxp"]}
          breadCrumbDeviceImages={[feederImg, substationImg, gxpImg]}
          breadCrumbDeviceUrlPaths={["feeder","zone_sub","gxp"]}
        >
          <Navigation
            isOpen={isOpen}
            topNavTitle={"Compass - Feeder"}
            sideNavLogo={logo2}
            currentPage={""}
            items={navItems}
          />
          <DeviceWidget
            isFluid={false}
            dataLink={true}
            processorConfig={icpConfig}
          />
    
        </DevicePage>
        <DevicePage
          isFluid={false}
          isBefore1910={true}
          path={"/lvc/"}
          baseUrl="https://compass-api.dev.welnet.co.nz/compass/"
          deviceType={"lv_circuit"}
          deviceTypeTitleCasing={"camel"}
          // extensionNames={}
          isLoadingNavLogo={logo2}
          // relationParentNames={["icp_lvcircuit", "icp_transformer"]}
          // relationChildNames={["icp_lvcircuit"]}
          isLoadingNavItems={navItems}
          isLoadingNavTitle={"Compass - lvc - loading"}

          // mapType={"basic"}
          // mapProjection={"EPSG:4326"}
          // mapParentColors={{fillColor: "lightblue", borderColor : "blue"}}
          // mapChildrenColors={[{fillColor: "pink", borderColor : "red"}]}

          // hasBreadCrumbs={true}
          // breadCrumbPath={"lvcircuit->transformer->feeder->zonesub->gxp"}
          // breadCrumbDeviceTypes={["lv_circuit","transformer", "feeder", "zone_sub", "gxp"]}
          // breadCrumbDeviceImages={[circuitImg, transformerImg, feederImg, substationImg, gxpImg]}
          // breadCrumbDeviceUrlPaths={["lvc","transformer","feeder","zone_sub","gxp"]}
        >
          <Navigation
            isOpen={isOpen}
            topNavTitle={"Compass - Feeder"}
            sideNavLogo={logo2}
            currentPage={""}
            items={navItems}
          />
          <DeviceWidget
            isFluid={false}
            dataLink={true}
            processorConfig={icpConfig}
          />
    
        </DevicePage>
        <DevicePage
          isFluid={false}
          isBefore1910={true}
          path={"/zone_sub/"}
          baseUrl="https://compass-api.dev.welnet.co.nz/compass/"
          deviceType={"zone_sub"}
          deviceTypeTitleCasing={"camel"}
          extensionNames={["location", "zone_sub_ext"]}
          isLoadingNavLogo={logo2}
          // relationParentNames={["icp_lvcircuit", "icp_transformer"]}
          relationChildNames={["feeder_zonesub"]}
          isLoadingNavItems={navItems}
          isLoadingNavTitle={"Compass - zonesub - loading"}

          mapType={"basic"}
          mapProjection={"EPSG:4326"}
          mapParentColors={{fillColor: "lightblue", borderColor : "blue"}}
          mapChildrenColors={[{fillColor: "pink", borderColor : "red"}]}

          hasBreadCrumbs={true}
          breadCrumbPath={"zonesub->gxp"}
          breadCrumbDeviceTypes={["zone_sub", "gxp"]}
          breadCrumbDeviceImages={[substationImg, gxpImg]}
          breadCrumbDeviceUrlPaths={["zone_sub","gxp"]}
        >
          <Navigation
            isOpen={isOpen}
            topNavTitle={"Compass - Zonesub"}
            sideNavLogo={logo2}
            currentPage={""}
            items={navItems}
          />
          <DeviceWidget
            isFluid={false}
            dataLink={true}
            processorConfig={icpConfig}
          />
    
        </DevicePage>
        <DevicePage
          isFluid={false}
          isBefore1910={true}
          path={"/gxp/"}
          baseUrl="https://compass-api.dev.welnet.co.nz/compass/"
          deviceType={"gxp"}
          deviceTypeTitleCasing={"upper"}
          extensionNames={["location", "gxp_ext"]}
          isLoadingNavLogo={logo2}
          // relationParentNames={["icp_lvcircuit", "icp_transformer"]}
          relationChildNames={["zonesub_gxp"]}
          isLoadingNavItems={navItems}
          isLoadingNavTitle={"Compass - GXP - loading"}

          mapType={"basic"}
          mapProjection={"EPSG:4326"}
          mapParentColors={{fillColor: "lightblue", borderColor : "blue"}}
          mapChildrenColors={[{fillColor: "pink", borderColor : "red"}]}

          hasBreadCrumbs={false}
          // breadCrumbPath={""}
          // breadCrumbDeviceTypes={[""]}
          // breadCrumbDeviceImages={[substationImg, gxpImg]}
          // breadCrumbDeviceUrlPaths={["zone_sub","gxp"]}
        >
          <Navigation
            isOpen={isOpen}
            topNavTitle={"Compass - Zonesub"}
            sideNavLogo={logo2}
            currentPage={""}
            items={navItems}
          />
          <DeviceWidget
            isFluid={false}
            dataLink={true}
            processorConfig={icpConfig}
          />
    
        </DevicePage>
        <Page 
          isFluid={false}
          path={"/Page"}
        >
          <Navigation
            isOpen={isOpen}
            topNavTitle={"Compass - Map Example - Hardcoded"}
            sideNavLogo={logo2}
            currentPage={"/Page"}
            items={navItems}
          />

        </Page>
        <Page
          isFluid={false}
          path={"/Nwp"}
          
        >
          <Navigation
            isOpen={isOpen}
            topNavTitle={"Compass - Network Planning"}
            sideNavLogo={logo2}
            currentPage={"/Nwp"}
            items={navItems}
          />
               
        </Page>
      </RouteWrap>
    </div>
  );
}

export default App;
