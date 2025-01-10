import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';

//AI BAR CHART
const experienceDataAI = [2,2,1];
const proficiencyDataAI = [4, 4, 2];
const xLabelsAI = [
  'Regresssion',
  'Classification',
  'CNN',
  
];

export function AIBarChart() {
  return (
    <BarChart 
      sx={{
        // animation
        "@keyframes width-increase3": {
                    "0%": {
                        // opacity: "0"
                        transform: "scale(0.3) rotate(0deg) translateX(-30%) translateY(30%)",
                        opacity: "0"
                      },
                      
                    "100%": {
                        // opacity: "100"
                        transform: "scale(1) rotate(0deg) translateX(0%) translateY(0%)",
                        opacity: "1"
                    }
                },
                animation:  "width-increase3 2s ease ",  
        
        '.MuiChartsAxis-tickLabel ': {
          
          fill : "white"
        },
        '.MuiChartsAxis-tick' : {
          fill :'white',
          stroke : 'white'
        },
        '.MuiChartsAxis-line ':{
          stroke: 'white'
        },
        '.MuiChartsLegend-series tspan':{
          fill : 'white',
        },
        
        }}

      width={700}
      height={270}
      series={[
        { data: proficiencyDataAI, label: 'Proficiency (0 to 4)', id: 'proficiencyId' },
        { data: experienceDataAI, label: 'Experience (years)', id: 'experienceId' },
      ]}
     
      xAxis={[{ data: xLabelsAI, scaleType: 'band' }]}
    />
  );
}



//WEB DEV BAR CHART
const experienceData = [1,2, 2, 2, 1,1, 3, 3, 3 ];
const proficiencyData = [1, 2, 2, 2, 3,4, 2, 3, 3 ];
const xLabels = [
  'SQL',
  'MongoDB',
  'Express.js',
  'Node.js',
  'React.js',
  'Next.js',
  'JavaScript',
  'CSS',
  'Bootstrap',
];

export function SimpleBarChart() {
  return (
    <BarChart 
      sx={{
        // animation
        "@keyframes width-increase3": {
                    "0%": {
                        // opacity: "0"
                        transform: "scale(0.3) rotate(0deg) translateX(-30%) translateY(30%)",
                        opacity: "0"
                      },
                      
                    "100%": {
                        // opacity: "100"
                        transform: "scale(1) rotate(0deg) translateX(0%) translateY(0%)",
                        opacity: "1"
                    }
                },
                animation:  "width-increase3 2s ease ",  
        
        '.MuiChartsAxis-tickLabel ': {
          
          fill : "white"
        },
        '.MuiChartsAxis-tick' : {
          fill :'white',
          stroke : 'white'
        },
        '.MuiChartsAxis-line ':{
          stroke: 'white'
        },
        '.MuiChartsLegend-series tspan':{
          fill : 'white',
        },
        
        }}

      width={700}
      height={270}
      series={[
        { data: proficiencyData, label: 'Proficiency (0 to 4)', id: 'proficiencyId' },
        { data: experienceData, label: 'Experience (years)', id: 'experienceId' },
      ]}
     
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}

//PROGRAMMING BAR CHART
const Prog_proficiencyData = [2, 5, 1, 2];
const Prog_xLabels = [
  'C',
  'C++',
  'JavaScript',
  'Python',
  
  
];
export function ProgBarChart() {
  return (
    <BarChart 
      sx={{
        '.MuiChartsAxis-tickLabel ': {
          
          fill : "white"
        },
        '.MuiChartsAxis-tick' : {
          fill :'white',
          stroke : 'white'
        },
        '.MuiChartsAxis-line ':{
          stroke: 'white'
        },
        '.MuiChartsLegend-series tspan':{
          fill : 'white',
        },
        '.MuiChartsLegend-mark':{
          fill : '#B0A695',
        },
        '.css-1vuxth3-MuiBarElement-root':{
          fill : '#B0A695',
        },
        
        }}

      width={600}
      height={270}
      series={[
        { data: Prog_proficiencyData, label: 'Proficiency (0 to 5)', id: 'ProgproficiencyId' },
      ]}
     
      xAxis={[{ data: Prog_xLabels, scaleType: 'band' }]}
    />
  );
}




//AI LINE CHART
// const uData_LINE = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 3553];
const pData_AI = [2, 3, 1];
const xLabels_AI = [
  'Regression',
  'Classification',
  'CNN',
  
];

export function AILineChart() {


  return (
   
    <LineChart
        width={700}
        height={250}
        sx={{
          // animation
          "@keyframes width-increase3": {
                    "0%": {
                        // opacity: "0"
                        transform: "scale(0.3) rotate(0deg) translateX(-30%) translateY(30%)",
                        opacity: "0"
                      },
                    "100%": {
                        // opacity: "100"
                        transform: "scale(1) rotate(0deg) translateX(0%) translateY(0%)",
                        opacity: "1"
                    }
                },
                animation:  "width-increase3 2s ease ",  



        '.css-34hspi .MuiChartsAxis-tickLabel': {  
          fill : "white"
        },
        '.css-34hspi .MuiChartsAxis-tick' : {
          fill :'white',
          stroke : 'white'
        },
        '.css-34hspi .MuiChartsAxis-line':{
          stroke: 'white'
        },
        '.MuiChartsLegend-series tspan':{
          fill : 'white',
        },

        'rect.MuiChartsLegend-mark':{
          fill : '#7E30E1',
          // stroke : "red"
        },
        '.MuiLineElement-series-pvId': {
          strokeDasharray: '5 5',
          stroke: "#7E30E1"
        },
        
      
        '.MuiMarkElement-series-pvId' :{
          stroke: "#7E30E1",
          fill : "#7E30E1"
        },
        
        
        }}

        series={[
          
            { data: pData_AI, label: 'pv', id: 'pvId',
            label: 'No. of Projects',
             },
            
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels_AI }]}
    />
  );
}



//Web dev LINE CHART
// const uData_LINE = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 3553];
const pData_WebDev = [1, 1, 5, 4, 2, 2, 5,4, 6];
const xLabels_WebDev = [
  'R',
  'Bootstrap',
  'CSS, HTML',
  'MongoDB',
  'Express.js',
  'Node.js',
  'React.js',
  'Next.js',
  'JavaScript',
  
];


export function WebDevLineChart() {


  return (
   
    <LineChart
        width={700}
        height={250}
        sx={{
          // animation
          "@keyframes width-increase3": {
                    "0%": {
                        // opacity: "0"
                        transform: "scale(0.3) rotate(0deg) translateX(-30%) translateY(30%)",
                        opacity: "0"
                      },
                    "100%": {
                        // opacity: "100"
                        transform: "scale(1) rotate(0deg) translateX(0%) translateY(0%)",
                        opacity: "1"
                    }
                },
                animation:  "width-increase3 2s ease ",  



        '.css-34hspi .MuiChartsAxis-tickLabel': {  
          fill : "white"
        },
        '.css-34hspi .MuiChartsAxis-tick' : {
          fill :'white',
          stroke : 'white'
        },
        '.css-34hspi .MuiChartsAxis-line':{
          stroke: 'white'
        },
        '.MuiChartsLegend-series tspan':{
          fill : 'white',
        },

        'rect.MuiChartsLegend-mark':{
          fill : '#A1DD70',
          // stroke : "red"
        },
        '.MuiLineElement-series-pvId': {
          strokeDasharray: '5 5',
          stroke: "#A1DD70"
        },
        
      
        '.MuiMarkElement-series-pvId' :{
          stroke: "#A1DD70",
          fill : "#A1DD70"
        },
        
        
        }}

        series={[
          
            { data: pData_WebDev, label: 'pv', id: 'pvId',
            label: 'No. of Projects',
             },
            
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels_WebDev }]}
    />
  );
}


const pData_Prog = [0, 5, 51, 320, 490];
const xLabels_Prog = [
  '2021',
  '2022',
  '2023',
  '2024',
  'Present'
];

export function ProgrammingLineChart() {


  return (
   
    <LineChart
        width={600}
        height={250}
        sx={{
        '.MuiLineElement-series-pvId': {
          strokeDasharray: '5 5',
          stroke: "#F9ED69"
        },
        
      
        '.MuiMarkElement-series-pvId' :{
          stroke: "#F9ED69",
          fill : "#F9ED69"
        },
        '.MuiChartsAxis-tickLabel ': {
          
          fill : "white"
        },
        '.MuiChartsAxis-tick' : {
          fill :'white',
          stroke : 'white'
        },
        '.MuiChartsAxis-line ':{
          stroke: 'white'
        },
        '.MuiChartsLegend-series tspan':{
          fill : 'white',
        },


        'rect.MuiChartsLegend-mark':{
          fill : '#F9ED69',
          // stroke : "red"
        },
        
        }}

        series={[
          
            { data: pData_Prog, label: 'pv', id: 'pvId',
            label: 'Leetcode Questions',
             },
            
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels_Prog }]}
    />
  );
}


const pData_Core = [0, 4, 4, 3, 1, 3, 4, 4];
const xLabels_Core = [
  'Hacking',
  'DBMS',
  'OS',
  'Video Analytics',
  'BigData',
  'Compiler',
  
  'Algo',
  'DataStruc',
];
export function CoreLineChart() {


  return (
   
    <LineChart
        width={700}
        height={300}
        sx={{
        
        '.MuiChartsAxis-tickLabel ': {
          
          fill : "white"
        },
        '.MuiChartsAxis-tick' : {
          fill :'white',
          stroke : 'white'
        },
        '.MuiChartsAxis-line ':{
          stroke: 'white'
        },
        '.MuiChartsLegend-series tspan':{
          fill : 'white',
        },
        '.MuiLineElement-series-CorepvId': {
          strokeDasharray: '5 5',
          stroke: "#FF2E63"
        },
        
      
        '.MuiMarkElement-series-CorepvId' :{
          stroke: "pink",
          fill : "pink"
        },

        'rect.MuiChartsLegend-mark':{
          fill : '#FF2E63',
          // stroke : "red"
        },
        
        }}

        series={[
          
            { data: pData_Core, label: 'Corepv', id: 'CorepvId',
            label: 'Proficiency (0-4)',
             },
            
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels_Core }]}
    />
  );
}