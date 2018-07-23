import React from 'react';
import ReactDOM from 'react-dom';
import Mission from '../Mission';
import Capabilities from '../Capabilities';
import Adnorml from '../Adnorml';
import Victories from '../Victories';
import Contacts from '../Contacts';

var keyWordsArray = ['magic', 'growth', 'impact', 'loyalty', 'wows', 'growth', 'buzz', 'edge', 'meaning'];

  class Main extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
          count: 0,
          keyWord: 'magic',
          img: "img_hidden",
          loading: "loading_invisible",
          foundation: "div_invisible"            
        };
            this.startTimer=this.startTimer.bind(this);
            this.tick=this.tick.bind(this);
            this.onHide=this.onHide.bind(this);
            this.onShowLoading=this.onShowLoading.bind(this);
            this.onShowDiv=this.onShowDiv.bind(this);
          }

          tick () {

              
              this.onShowLoading();
              this.onShowDiv();

            if(this.state.count < keyWordsArray.length){
              this.setState({
                  count: (+this.state.count + 1),
                  keyWord:keyWordsArray[this.state.count]
                })
              } 
              else {
                clearInterval(this.timer)
                this.setState ({
                  count: 0
                })
                this.timer = setInterval(this.tick, 1000)
                this.setState({
                  count: (+this.state.count + 1),
                  keyWord:keyWordsArray[this.state.count]
                })
              }

              this.onHide();
            }

          onHide(){
            if(this.state.count % 2 === 0) {
              this.setState({
              img: "img_showed"
              })
            }
            else {
              this.setState ({
              img: "img_hidden"
              })
            }
          }

          onShowLoading(){
            if(this.state.count === 0) {
              this.setState({
              loading: "loading_visible"
              })
            }
          }
          onShowDiv(){
            if(this.state.count === 2) {
              this.setState({
              foundation: "div_visible",
              loading: "loading_invisible"
              })
            }
          }

           startTimer () {
            clearInterval(this.timer);
            this.timer = setInterval(this.tick, 2000);
          }

          render() {

            const { keyWord, count, img } = this.state;

            return (
            <div id='main'>
            <div>
                <img className={this.state.loading} src="img/triangle_moving.gif" id="imgTriangle">
                </img>
                <div className={this.state.loading} id="loading"> Loading... </div>
            </div>
              <div id='foundation' onLoad={this.startTimer} className={this.state.foundation}>
                
                <div className='headRoom'>
                  <div className ='headPart'>
                    <div className="hrLine"></div>
                    <div className="hrLine"></div>
                    <div className="hrLine"></div>
                  </div>
                  <img src="img/logo.png" className="logo_img"/>
                </div>
                <div className="intro"> 
                  Web app development agency with an adversing edge 
                </div>
                <div className="intro mediumFont"> 
                  We create 
                </div>
                <div className="intro" id="keyWord"> 
                  {this.state.keyWord} 
                </div>
                <div className="intro mediumFont"> 
                  for your brand 
                </div>
                <div className="intro"> 
                  Begin the invation 
                </div>
                <div>
                  <img 
                      className={this.state.img} 
                      src='img/pointer.png'
                  />
                </div>
                <div id="letterBlock">
                  <div id="square">
                  </div>
                  <div id="triangleUp">
                  </div>
                  <div id="triangleDown">
                  </div>
                  <div id="triangleWhite">
                  </div>
              </div>

            </div>

            <Mission />

            <Capabilities />

            <Adnorml />

            <Victories />

            <Contacts />

            </div>
            );
          }
        };
export default Main;
