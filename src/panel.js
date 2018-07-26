/**
 * Created by w on 2018/7/26.
 */
import React from 'react';

class Panel extends React.Component{
  constructor(props){
    super(props);
  
    this.state = {
      isCollapse:false
    };
    
    this.handleClickHeader = this.handleClickHeader.bind(this);
  }
  
  handleClickHeader(){
    this.setState({
      isCollapse:!this.state.isCollapse
    },()=>{
      this.state.isCollapse ? this.panel.style.height = 'auto' : this.panel.style.height = '52px';
    });
  }
  
  render(){
    return <div>
      <div className="panel" ref={panel=>this.panel=panel}>
        <section className="panel-header" onClick={this.handleClickHeader}>
          {this.props.headerText}
          <div className="panel-dropdown"></div>
        </section>
        <section className="panel-main">
          {this.props.mainContext}
        </section>
      </div>
      <style>
        {`
        .panel{
          width:300px;
          overflow:hidden;
          height:52px;
        }
        .panel-header{
          width:288px;
          height:50px;
          line-height:50px;
          font-size:20px;
          padding-left:10px;
          border-radius:2px;
          border:solid 1px #E2E2E2;
          box-shadow:0 1px 1px #ccc;
        }
        .panel-dropdown{
          float:right;
          margin:15px 10px auto auto;
          width:0;
          height:0;
          border-top:solid 15px #ccc;
          border-left:solid 10px transparent;
          border-right:solid 10px transparent;
        }
        .panel-main{
          width:258px;
          height:auto;
          padding:20px;
          border:solid 1px #E2E2E2;
          border-radius:2px;
          box-shadow:0 1px 1px #ccc;
        }
      `}
      </style>
    </div>
  }
}

export default Panel;
