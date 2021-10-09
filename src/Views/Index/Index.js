import React from 'react';
import MapChina from "@/Component/MapChina";
import './index.scss';
import { Decoration2,Decoration5,Decoration8,ScrollBoard,FullScreenContainer,ScrollRankingBoard,Decoration9,BorderBox1,FlylineChartEnhanced } from '@jiaminghi/data-view-react'
export default class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            config:{
                header: ['列1', '列2', '列3'],
                headerBGC:"#3a82ee",
                data: [
                    ['行1列1', '行1列2', '行1列3'],
                    ['行2列1', '行2列2', '行2列3'],
                    ['行3列1', '行3列2', '行3列3'],
                    ['行4列1', '行4列2', '行4列3'],
                    ['行5列1', '行5列2', '行5列3'],
                    ['行6列1', '行6列2', '行6列3'],
                    ['行7列1', '行7列2', '行7列3'],
                    ['行8列1', '行8列2', '行8列3'],
                    ['行9列1', '行9列2', '行9列3'],
                    ['行10列1', '行10列2', '行10列3']
                ]
            },
            configTwo:{
                data:[
                    {
                        name: '周口',
                        value: 55
                    },
                    {
                        name: '南阳',
                        value: 120
                    },
                    {
                        name: '西峡',
                        value: 78
                    },
                    {
                        name: '驻马店',
                        value: 66
                    },
                    {
                        name: '新乡',
                        value: 80
                    },
                    {
                        name: '信阳',
                        value: 45
                    },
                    {
                        name: '漯河',
                        value: 29
                    }
                ],
            }
        }
    }

    render(){
        return(
            <div style={{height:'100%'}}>
                <FullScreenContainer className="content">
                    <div className="topTitle">
                            <Decoration8 className="left" style={{width: '30%', height: '40px'}} />
                        <div className="center">
                            <h1 className="top">大屏数据化展示</h1>
                            <Decoration5 className="bottom" />
                        </div>
                            <Decoration8 className="right" reverse={true} style={{width: '30%', height: '40px'}} />
                    </div>
                    <div className="content_line">
                        <Decoration2 style={{width: '100%', height: '5px'}} />
                        <Decoration9 style={{width: '100px', height: '100px',color:"#fff",margin:"0 auto"}}>88%</Decoration9>
                        <Decoration2 style={{width: '100%', height: '5px'}} />
                    </div>
                    <div className="content_bottom">
                        <div>
                            <ScrollRankingBoard config={this.state.configTwo} style={{width: '400px', height: '300px'}} />
                        </div>
                        <div className="mapBox">
                            <MapChina></MapChina>
                        </div>
                        <ScrollBoard config={this.state.config} style={{width: '400px', height: '300px'}} />
                    </div>
                </FullScreenContainer>
            </div>
        )
    }
}
