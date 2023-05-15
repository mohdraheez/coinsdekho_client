import React from "react";
import ReturnName from "./coinname";
import CryptoChart from './Fetchgraph'
import HighLowFetcher from './graphdata'
import { useParams } from "react-router-dom";
import '../detail.css'
import DetailDesc from "./detaildesc";
import img from '../images/newlogo.png'
import { InitialUpdate } from "./Fetchgraph";


function EventHandler(e){
    document.querySelector('.chartbtnselected').classList.remove('chartbtnselected');
    e.target.classList.add('chartbtnselected');
    InitialUpdate(e.target.innerHTML)
}

function Detail(props){
    var param = useParams()
    var splitdata = param.id.split(' ');
    var sym = splitdata[0];
    var id = splitdata[1];
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
    }
    link.href = img;
    var symbolsmall = sym.toLowerCase();
    link.href = `https://assets.coincap.io/assets/icons/${symbolsmall}@2x.png`
    document.title = id
    return(
        <div className="Details">
                <ReturnName symbol={sym} id={id} className="DeatailData"/>
                <div className="Detailcontent">
                    <div className="Detailcontentinnerdiv">
                            <HighLowFetcher key={sym} sym={sym} id={id}/>
                    </div>
                    <div className="chartdivbtns">
                        <button className="chartbtn chartbtnselected" onClick={EventHandler}>
                            10m
                        </button>
                        <button className="chartbtn" onClick={EventHandler}>
                            30m
                        </button>
                        <button className="chartbtn" onClick={EventHandler}>
                            1h
                        </button>
                        <button className="chartbtn" onClick={EventHandler}>
                            1d
                        </button>
                        <button className="chartbtn" onClick={EventHandler}>
                            1M
                        </button>
                        <button className="chartbtn" onClick={EventHandler}>
                            1Y
                        </button>
                    </div>
                    <div className="graph">
                        <CryptoChart key={sym} sym={sym} id={id}/>
                    </div>
                    
                </div>
                <DetailDesc key={sym} sym={sym} id={id}/>

        </div>
    )
}

export default Detail;