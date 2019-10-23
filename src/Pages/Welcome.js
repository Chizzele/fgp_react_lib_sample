import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        return (
            <div className={"col-8"} style={{"marginTop":"20px",}}>
            <h1>Welcome to the home page</h1>
            <p>
              This is an example of how to use the FGP-React-jsKit, you should be able to create a project just like this one 
              in a matter of minutes. Here is a couple of steps of how to get started
            </p>
            <ul style={{ "listStyle":"none", "textAlign": "left"}}>
              <li style={{"marginTop" : "10px"}}>
                <span style={{"fontWeight" : "bold"}}>Step 1</span> <br/>
                <span> Create a new React App, you will require <i><b>nodeJS</b></i> for this, if you have this installed simply run </span> <br/>
                <code>$ npx create-react-app {"<your-app-name>"} </code> <br/>
                <span> Navigate into this directory</span> <br/>
              </li>
              <li style={{"marginTop" : "50px"}}>
                <span style={{"fontWeight" : "bold"}}>Step 2</span> <br/>
                <span> Now install the our component library using the following command, ensuring you run as root user, use <i><b>sudo</b></i> </span> <br/>
                <code >$ npm i @chizzele-/fgp_react_lib</code> <br/>
              </li>
              <li style={{"marginTop" : "50px"}}>
                <span style={{"fontWeight" : "bold"}}>Step 3</span> <br/>
                <span> Get friendly with our library, and read up on our documentation, at a very basic level 
                       to get your Routing, Navbar, Linking and Page templates working you will want following import statement at the top of your <i><b>App.js</b></i> file
                </span> <br/>
                {/* style={{""}} */}
                <div className={"codeArticleLabel"} >App.js</div>
                <article className={"codeArticle"}>                        
                  <code>
                    import React from 'react';<br/>
                    ...<br/>
                    import  {"{RouteWrap, Page, Navigation}"} from '@chizzele-/fgp_react_lib';<br/>
                    ...</code> 
                </article>
              </li>
              <li style={{"marginTop" : "50px"}}>
                <span style={{"fontWeight" : "bold"}}>Step 4</span> <br/>
                <span> Now you can start using our library, as a beginning template I would recommend the following, please read the docs to gain an understanding
                       of how to use our library.
                </span> <br/>
                <div className={"codeArticleLabel"} >App.js</div>
                <article className={"codeArticle"}>

                    <code> 
                        { "function App() { " } <br/> 
                            &nbsp;&nbsp;&nbsp;&nbsp;{"const navItems = [{" } 
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key:"home01"
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;linkTo:"/Home",
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontAwesomeIcon:"home",
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontAwesomeLib:"fa",
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description: "Home"
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{"}," } 
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{"{" } 
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key:"Page02"
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;linkTo:"/Page2",
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontAwesomeIcon:"search",
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontAwesomeLib:"fa",
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;description: "Page 2"
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;{"}];" } 
                            <br/>
                            <br/>&nbsp;&nbsp;return (
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<div className="App">'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<RouteWrap>'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<Page'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'path={"/Home"}'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'>'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<Navigation '}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'topNavTitle={"Compass - Home"}'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'sideNavLogoPath={logo}'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'currentPage={"/Home"}'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'isOpen={false}'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'items={navItems}'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'/>'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<h1> Hello World! <br/> I am page one! </h1>'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</Page>'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<Page'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'path={"/Page2"}'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'>'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<Navigation '}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'topNavTitle={"Compass - Page2"}'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'sideNavLogoPath={logo}'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'currentPage={"/Page2"}'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'isOpen={false}'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'items={navItems}'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'/>'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<h1> Hello World! </br> I am page two! </h1>'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</Page>'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<RouteWrap>'}
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</div>'}
                            <br/>&nbsp;&nbsp;);
                            <br/>}
                            <br/>export default App;
                    </code> <br/>
                </article>
                
              </li>
            </ul>
          </div>
        )
    }
}

export default Welcome
