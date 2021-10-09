import React from 'react';
import * as Echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/legend';
import '@/Utils/china.js'
// import mapJson from '@/Utils/map.json';
import { GeoComponent } from 'echarts/components';
Echarts.use([GeoComponent]);
export default class MapChina extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        this.createMap()
        this.createMap()
        this.createMap()
    }
    createMap = () => {
        const myChart = Echarts.init(this.mapEcharts);
        var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
        var option = {
            geo: {
                map: "china",
                roam: false,// 一定要关闭拖拽
                zoom: 1.15,
                center: [105, 36], // 调整地图位置
                label: {
                    normal: {
                        show: false, //关闭省份名展示
                        fontSize: "10",
                        color: "rgba(0,0,0,0.7)"
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: "#0d0059",
                        borderColor: "#389dff",
                        borderWidth: 1, //设置外层边框
                        shadowBlur: 5,
                        shadowOffsetY: 8,
                        shadowOffsetX: 0,
                        shadowColor: "#01012a"
                    },
                    emphasis: {
                        areaColor: "#184cff",
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 5,
                        borderWidth: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            },
            series: [
                {
                    name: '',
                    type: 'lines',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: '#a6c84c',
                            width: 1,
                            curveness: 0.2
                        }
                    },
                    data: [{
                        fromName: "北京",
                        toName: "上海",
                        coords:[[116.405285, 39.904989],[121.4648, 31.2891]]
                    },
                        {
                            fromName: "北京",
                            toName: "昆明",
                            coords:[[116.405285, 39.904989],[102.73,25.04]]
                        },
                        {
                            fromName: "北京",
                            toName: "乌鲁木齐",
                            coords:[[116.405285, 39.904989],[87.68,43.77]]
                        },
                        {
                            fromName: "北京",
                            toName: "哈尔滨",
                            coords:[[116.405285, 39.904989],[126.63,45.75]]
                        }]
                },
            ]
        }
        myChart.setOption(option);
    }
    render(){
        return(
            <div style={{ width:'500px',height:'400px' }} ref={mapEcharts=>{ this.mapEcharts = mapEcharts }}>中国地图</div>
        )
    }
}
