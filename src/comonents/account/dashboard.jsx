import React, { useState } from "react";
import styled from "styled-components";
import Chart from 'react-apexcharts'
import "./dashboard.scss";
import { BoxContainer } from "../account/common";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutLinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined";

export function Widget({ type }) {
  let data;
  let bargraph = {
    options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [{
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }]
  }

 let linegraph = {
          
    series: [{
      name: 'Website Blog',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
      name: 'Social Media',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: 'Traffic Sources'
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
      xaxis: {
        type: 'datetime'
      },
      yaxis: [{
        title: {
          text: 'Website Blog',
        },
      
      }, {
        opposite: true,
        title: {
          text: 'Social Media'
        }
      }]
    },
  
  
  };

  switch (type) {
    case "user":
      data = {
        title: "members",
        count: 10495,
        icon: (
          <PersonOutlineOutlined
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: " rgba(218,165,32,0.2)",
            }}
          />
        ),
      };
      break;
    case "places":
      data = {
        title: "Places added",
        count: 30942,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: " rgba(218,165,32,0.2)",
            }}
          />
        ),
      };
      break;
    case "support":
      data = {
        title: "Support Members",
        count: 45269,
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{
              color: "green",
              backgroundColor: " rgba(0,128,0,0.2)",
            }}
          />
        ),
      };
      break;
    case "tags":
      data = {
        title: "Tags Used",
        count: 20965,
        icon: (
          <AccountBalanceWalletOutLinedIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: " rgba(128,0,128,0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div>
       <div className="widget">
      <div className="left">        
        <span className="title">{data.title}</span>
        <span className="counter">{data.count}</span>
      </div>
      
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
        </div>
        {data.icon}
      </div>
      
    </div>


    </div>
  );
}
