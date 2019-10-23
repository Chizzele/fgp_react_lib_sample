import React, { Component } from 'react'
import {DevicePage, MultiTableFilterSearch, DeviceWidget, Navigation, ChildExtensionList, StandardGraph} from '@chizzele-/fgp_react_lib'
import logo2 from '../images/fgp-logo.png'
import circuitImg from '../images/circuit.png';
import feederImg from '../images/feeder.png';
import gxpImg from '../images/gxp.png';
import icpImg from '../images/circuit.png';
import substationImg from '../images/substation.png';
import transformerImg from '../images/transformer.png';
import icpConfig from '../configs/icpWidgetProcessorConfig.json';
import icpExtensionTableConf from '../configs/icpExtensionTableConf.json';
import TXmultiTableSearchConf from '../configs/TXmultiTableSearchConf.json';
import transformerIntervalGraphConfig from '../configs/transformerIntervalGraphConfig.json';

export class Transformer extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            
        <DevicePage
          isFluid={false} // sets whether or not you have container, or container fluid class
          isBefore1910={true}
          path={"/transformer/"}
          baseUrl="https://compass-api.dev.welnet.co.nz/compass/"
          deviceType={"transformer"}
          deviceTypeTitleCasing={"camel"}
          extensionNames={["location", "transformer_ext"]}
          isLoadingNavLogo={logo2}
          // relationParentNames={["icp_lvcircuit", "icp_transformer"]}
          relationChildNames={["icp_transformer"]}
          isLoadingNavItems={this.props.navItems}
          isLoadingNavTitle={"Compass - transformer - loading"}

          // mapType={"none"}
          // mapInteractions={[{"type":"redirect"}]}
          // mapProjection={"EPSG:4326"}
          // mapParentColors={{fillColor: "lightblue", borderColor : "blue"}}
          // mapChildrenColors={[{fillColor: "pink", borderColor : "red"}]}

          // hasBreadCrumbs={true}
          // breadCrumbPath={"transformer->feeder->zonesub->gxp"}
          // breadCrumbDeviceTypes={["transformer", "feeder", "zone_sub", "gxp"]}
          // breadCrumbDeviceImages={[transformerImg, feederImg, substationImg, gxpImg]}
          // breadCrumbDeviceUrlPaths={["transformer","feeder","zone_sub","gxp"]}
        >
          <Navigation
            isOpen={this.props.isOpen}
            topNavTitle={"Compass - Transformer"}
            sideNavLogo={logo2}
            currentPage={""}
            items={this.props.navItems}            
          />
          <DeviceWidget
            isFluid={false}
            dataLink={true}
            processorConfig={icpConfig}
          />
          <StandardGraph
            dataLink={true}
            collections={transformerIntervalGraphConfig.collections}
            ranges={transformerIntervalGraphConfig.ranges}
            rangeCollection={transformerIntervalGraphConfig.rangeCollection}
            graphName={"Transformer Consumption"}
          />

          {/* <MultiTableFilterSearch
            dataLink={true}
            isTab={true}
            isFluid={false}
            searchingTables={TXmultiTableSearchConf.searchingTables}
            baseApiUrl="https://compass-api.dev.welnet.co.nz/compass/"
            title="Event Search"
            dateFormat={"MMMM, dd"}
            filterableResults={true}
            openInNewPage={true}
          /> */}
          {/* <ChildExtensionList
            dataLink={true}
            isFluid={false}
            childType={"icp"}
            childExtension={"icp_ext"}
            tableConfig={icpExtensionTableConf}
            openInNewPage={true}
          /> */}
          
          {/* <StandardGraph

          /> */}
        </DevicePage>
        )
    }
}

export default Transformer
