import React, { Component } from 'react'
import {DevicePage, DeviceWidget, Navigation, ChildExtensionList} from '@chizzele-/fgp_react_lib'
import logo2 from '../images/fgp-logo.png'
import circuitImg from '../images/circuit.png';
import feederImg from '../images/feeder.png';
import gxpImg from '../images/gxp.png';
import icpImg from '../images/circuit.png';
import substationImg from '../images/substation.png';
import transformerImg from '../images/transformer.png';
import icpConfig from '../configs/icpWidgetProcessorConfig.json';
import meterExtensionTableConf from '../configs/meterExtensionTableConf.json';
export class Icp extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <DevicePage
            isFluid={false}
            isBefore1910={true}
            
            baseUrl="https://compass-api.dev.welnet.co.nz/compass/"
            deviceType={"icp"}
            deviceTypeTitleCasing={"upper"}
            extensionNames={["location", "icp_ext", "icp_event_stats_ext"]}
            isLoadingNavLogo={logo2}
  
            relationParentNames={["icp_lvcircuit", "icp_transformer"]}
            
            relationChildNames={["meter_icp"]}
  
            isLoadingNavItems={this.props.navItems}
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
              isOpen={this.props.isOpen}
              topNavTitle={"Compass - icp"}
              sideNavLogo={logo2}
              currentPage={""}
              items={this.props.navItems}
            />
            <DeviceWidget
              isFluid={false}
              dataLink={true}
              processorConfig={icpConfig}
            />

            <ChildExtensionList
              dataLink={true}
              isFluid={false}
              childType={"meter"}
              childExtension={"meter_ext"}
              tableConfig={meterExtensionTableConf}
              openInNewPage={true}
            />


          </DevicePage>
        )
    }
}

export default Icp
