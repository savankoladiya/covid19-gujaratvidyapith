import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../../services/corona.service';
import * as FusionCharts from 'fusioncharts';


@Component({
  selector: 'app-customer-segment-and-productwise-analysis',
  templateUrl: './customer-segment-and-productwise-analysis.component.html',
  styleUrls: ['./customer-segment-and-productwise-analysis.component.css']
})
export class CustomerSegmentAndProductwiseAnalysisComponent implements OnInit {

  constructor(private corona : CoronaService) { }
  coronaData: any = [];
  resp : any;
  resp1 : any;
  coronaCases :any;
  dataSource1:any;
  data:any;
  dataSource:any;
  dataSource3:any;
  dataSource4:any;
total :any;
resp3:any;
myDataSource:any;
datas:any; 
StateList = [];
states:any;
dataSourceNearState:any;
dataSource5:any;
IndiaState :any;
IndiaCoronaValue:any;
confirm:any;
recoverd:any;
active:any;
deths:any;

  ngOnInit() {
    this.corona.getCoronaData()
    .subscribe(data => this.coronadata(data));
    this.corona.getCoronaDataDetails()
    .subscribe(data => this.CoronaDetailsCases(data));
    this.corona.getCoronaData1()
    .subscribe(data => this.coronadataSeries(data));
    this.corona.getPredictionData()
    .subscribe(data => this.coronadataPredictionSeries(data));

   
    this.datas = {'Maharashtra': ['Gujarat', 'Telangana', 'Maharashtra', 'Delhi', 'Madhya Pradesh','Karnataka','Goa','Chhattisgarh'],
    'Tamil Nadu' : ['Tamil Nadu','Puducherry','Kerala','Andhra Pradesh','Karnataka','Delhi'],
    'Delhi' : ['Delhi','Uttar Pradesh','Haryana'],
    'Telangana' : ['Telangana','Maharashtra','Karnataka','Chhattisgarh','Delhi','Andhra Pradesh'],
    'Rajasthan' : ['Rajasthan','Gujarat','Madhya Pradesh','Punjab','Uttar Pradesh','Haryana','Delhi'],
    'Kerala' : ['Kerala','Tamil Nadu','Karnataka','Puducherry','Delhi'],
    'Uttar Pradesh' : ['Uttar Pradesh','Madhya Pradesh','Rajasthan','Delhi','Haryana','Uttarakhand','Bihar','Chhattisgarh','Jharkhand'],
    'Andhra Pradesh' :['Andhra Pradesh','Delhi','Chhattisgarh','Tamil Nadu','Karnataka','Odisha','Puducherry'],
    'Madhya Pradesh' :['Madhya Pradesh','Gujarat','Rajasthan','Maharashtra','Chhattisgarh','Uttar Pradesh','Delhi'],
    'Karnataka' :['Karnataka','Maharashtra','Tamil Nadu','Goa','Kerala','Andhra Pradesh','Telangana','Delhi'],
    'Gujarat' :['Gujarat','Rajasthan','Madhya Pradesh','Maharashtra','Delhi','Dadra and Nagar Haveli','Daman and Diu'],
    'Haryana' :['Haryana','Punjab','Himachal Pradesh','Rajasthan','Delhi','Uttarakhand','Uttar Pradesh','Chandigarh'],
    'Jammu and Kashmir' :['Jammu and Kashmir','Punjab','Himachal Pradesh','Delhi','Ladakh'],
    'Punjab' :['Punjab','Jammu and Kashmir','Haryana','Himachal Pradesh','Rajasthan','Delhi','Chandigarh'],
    'West Bengal' :['West Bengal','Odisha','Bihar','Jharkhand','Assam','Sikkim','Delhi'],
    'Odisha' :['Odisha','West Bengal','Chhattisgarh','Jharkhand','Chhattisgarh','Andhra Pradesh','Delhi'],
    'Bihar' :['Bihar','Uttar Pradesh','Jharkhand','West Bengal','Delhi'],
    'Uttarakhand' :['Uttarakhand','Haryana','Uttar Pradesh','Himachal Pradesh','Delhi'],
    'Assam' :['Assam','West Bengal','Manipur','Mizoram','Arunachal Pradesh','Nagaland','Meghalaya','Tripura','Delhi'],
    'Chandigarh' :['Chandigarh','Punjab','Haryana','Delhi'],
    'Himachal Pradesh' :['Himachal Pradesh','Punjab','Haryana','Uttarakhand','Uttarakhand','Jammu and Kashmir','Ladakh','Delhi'],
    'Ladakh' :['Ladakh','Jammu and Kashmir','Himachal Pradesh','Delhi'],
    'Andaman and Nicobar Islands' :['Andaman and Nicobar Islands','Delhi'],
    'Chhattisgarh' :['Chhattisgarh','Andhra Pradesh','Telangana','Odisha','Maharashtra','Uttar Pradesh','Madhya Pradesh','Delhi'],
    'Goa' :['Goa','','Maharashtra','Karnataka','Delhi'],
    'Puducherry' :['Puducherry','Tamil Nadu','Andhra Pradesh','Kerala','Delhi'],
    'Jharkhand' :['Jharkhand','Odisha','Bihar','West Bengal','Uttar Pradesh','Delhi'],
    'Manipur' :['Manipur','Nagaland','Mizoram','Assam','Delhi'],
    'Mizoram' :['Mizoram','Assam','Tripura','Manipur','Delhi'],
    'Arunachal Pradesh' :['Arunachal Pradesh','Assam','Nagaland','Delhi'],
    'Dadra and Nagar Haveli' :['Dadra and Nagar Haveli','Gujarat','Delhi'],
    'Tripura' :['Tripura','Assam','Mizoram','Delhi'],
    'Daman and Diu' :['Daman and Diu','Gujarat','Delhi'],
    'Lakshadweep' :['Lakshadweep','Delhi'],
    'Meghalaya' :['Meghalaya','Assam','Delhi'],
    'Nagaland' :['Nagaland','Assam Manipur','Delhi','Arunachal Pradesh'],
    'Sikkim' :['Sikkim','West Bengal','Delhi']}


 //alert(this.datas.Maharashtra);
  this.StateList = ['Maharashtra','Tamil Nadu','Delhi','Telangana','Rajasthan','Kerala','Uttar Pradesh','Andhra Pradesh','Madhya Pradesh',
  'Karnataka','Gujarat','Haryana','Jammu and Kashmir','Punjab','West Bengal','Odisha','Bihar','Uttarakhand','Assam','Chandigarh','Himachal Pradesh',
  'Ladakh','Andaman and Nicobar Islands','Chhattisgarh','Goa','Puducherry','Jharkhand','Manipur','Mizoram','Arunachal Pradesh','Dadra and Nagar Haveli',
  'Tripura','Daman and Diu','Lakshadweep','Meghalaya','Nagaland','Sikkim'];


  }

  CoronaDetailsCases(res:any){
   this.confirm = res.confirmed;
   this.recoverd = res.recovered;
   this.deths = res.deaths;
   this.active = res.active;
}


state(state:any){

  this.states = state;

  this.dataSource5 = {
    chart: {
      formatNumber: "0"
    },
    caption: {
      text: "Corona neighbour state status"
    },
    subcaption: {
      text: "Day Wise Corona"
    },
    series: "Type",
    showValues:"1"
  };

  this.fetchNearStateData();

}

fetchNearStateData() {

  let data = [];
  for (let index = 0; index < this.resp1.length; index++) {
    for (let i = 0; i < this.resp1[index].statewise.length; i++) {
         let d = new Date(this.resp1[index].day);
        let date = d.getDate()+"-"+ (d.getMonth() +1)+"-"+d.getFullYear(); 
        for (let j = 0; j < this.datas[this.states].length; j++) {

        if(this.datas[this.states][j] == this.resp1[index].statewise[i].state){
         
        data.push([date,this.resp1[index].statewise[i].state,this.resp1[index].statewise[i].confirmed]);
 
      }
    }
      
  }
}

//alert(JSON.stringify(data));
  var dataFetch = data;
  var schemaFetch = [{
    name: "Date",
    type: "date",
    format: "%d-%m-%Y"
},{
  name: "Type",
  type: "string"
}, {
  name: "Cases",
  type: "number"
}];

  Promise.all([dataFetch, schemaFetch]).then(res => {
    let [data, schema] = res;
    let fusionDataStore = new FusionCharts.DataStore();
    let fusionTable = fusionDataStore.createDataTable(data, schema);
    this.dataSource5.data = fusionTable;
  });
}



coronadata = (res:any) =>{
  this.resp = res;
  let stateNames = [];
  let stateCaseCount = [];
   this.total = 0;


   function compareByValue(a, b) {
    const bandA = a.confirmed;
    const bandB = b.confirmed;
  
    let comparison = 0;
    if (bandA < bandB) {
      comparison = 1;
    } else if (bandA > bandB) {
      comparison = -1;
    }
    return comparison;
  }

  let SortCOnfirmCases = this.resp.sort(compareByValue);


  for (let index = 0; index < SortCOnfirmCases.length; index++) {
    stateNames.push({
      label:SortCOnfirmCases[index].state
  });  

  stateCaseCount.push({
    value:SortCOnfirmCases[index].confirmed
  }); 
  
  this.total += Number(SortCOnfirmCases[index].confirmed);
 }

 document.getElementById("id1").innerHTML = "<b class='text-dark'>India: </b>";
 document.getElementById("id2").innerHTML = "<b class='text-dark'>Cases : </b>" + this.total;

 this.IndiaState = "India";
 this.IndiaCoronaValue = this.total;



   // coron list
      for (let index = 0; index < this.resp.length; index++) {
        this.coronaData.push({
          stateCase:this.resp[index].confirmed,
          stateName :this.resp[index].state
           });    
       
    }

  
    // corona Graph

  this.coronaCases= {
    chart: {
      caption: "Corona Cases State Wise",
      xaxisname: "Cases",
      yaxisname: "Cases",
      formatNumber: "0",
      sYAxisName: "",
      sNumberSuffix: "",
      exportenabled: "1",
      theme: "fusion",
      bgColor : "#ffffff",
      outCnvBaseFontColor: "#1e1e2f",
      showValues: "1"

    },
    categories: [
        {
          category: stateNames
        }
    ],
    dataset: [
      {
        seriesname: "Cases",
        data : stateCaseCount         
      },
     
      {
        seriesname: "Line",
        renderas: "line",
        parentYAxis: "S",
        showValues: "0",
        data: stateCaseCount
     }
    ]
  };

  this.dataSource = this.coronaCases;
  let statelist = ['Maharashtra','Tamil Nadu','Delhi','Telangana','Rajasthan','Kerala','Uttar Pradesh','Andhra Pradesh','Madhya Pradesh',
  'Karnataka','Gujarat','Haryana','Jammu and Kashmir','Punjab','West Bengal','Odisha','Bihar','Uttarakhand','Assam','Chandigarh','Himachal Pradesh',
  ,'Andaman and Nicobar Islands','Chhattisgarh','Goa','Puducherry','Jharkhand','Manipur','Mizoram','Arunachal Pradesh','Dadra and Nagar Haveli',
  'Tripura','Daman and Diu','Lakshadweep','Meghalaya','Nagaland','Sikkim'];
  
let stateId = ["021","010","012","029","031","020","033","036","002","018","017","015","035","013","028","005","026","007","014","004","016","006","001","023","011","027","022","032","024","003","025","008","009","019","030","034"];


let indiaData =[];
for (let index = 0; index < this.resp.length; index++) {

   for (let i = 0; i < statelist.length; i++) {
  if(statelist[i] == this.resp[index].state){
  indiaData.push({
    label:this.resp[index].state,
    value:this.resp[index].confirmed
       });    
     }
     }
}

function compare(a, b) {
  const bandA = a.label.toUpperCase();
  const bandB = b.label.toUpperCase();

  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}
let SortStatId = stateId.sort();
let SortIndiaData = indiaData.sort(compare);

let StateCompleteData = [];

for (let k = 0; k < SortIndiaData.length; k++) {
  StateCompleteData.push({
    label:SortIndiaData[k].label,
    value:SortIndiaData[k].value,
    id:SortStatId[k]
  });
}

this.data={
    colorrange: {
      minvalue: "0",
      startlabel: "Low",
      endlabel: "High",
      code: "#6baa01",
      gradient: "1",
      color: [{
          maxvalue: "4000",
          code: "#FFDD44",
          displayValue: "Median"
      }, {
          maxvalue: "8000",
          code: "#FF0000"
      }]
  },
       chart: {
                    caption: "India State",
                    theme: "fusion",
                    showBorder: "1",
                    bordercolor: "#000000",
                    entityborderThickness: "3",
                    formatNumberScale: "0",
                    showLabels: "0",
                    nullEntityAlpha: "100",
                    hoverOnNull: "1",
                    useSNameInLabels: "1",
                    color : 'rgba(29,140,248,0.1)',
                    zeroLineColor : "transparent",
                    outCnvBaseFontColor: "#1e1e2f"
                },
               
            data :StateCompleteData
    };
    
    this.dataSource1 = this.data; 


}

coronadataSeries(res:any){

 this.resp1 = res;
 this.state("Maharashtra");

 this.dataSource3 = {
  chart: {
  },
  caption: {
    text: "Corona State Wise"
  },
  subcaption: {
    text: "Day Wise Corona"
  },
  series: "Type",
  showValues:"1"
};

this.fetchData();

this.dataSource4 = {
  chart: {
  },
  caption: {
    text: "Prediction Corona Gujarat State"
  },
  subcaption: {
    text: "Prediction Day Wise Corona Gujarat"
  },
  series: "Type1",
  yaxis: [
    {
      plot: [
        {
          value: "Case2",
       }
      ],
    }
  ]
  };

this.fetchPredictData();
}

coronadataPredictionSeries(res:any){
  this.resp3 = res;
}

fetchData() {

  let data = [];
  for (let index = 0; index < this.resp1.length; index++) {

    
  let d = new Date(this.resp1[index].day);
  
  let date = d.getDate()+"-"+ (d.getMonth() +1)+"-"+d.getFullYear();  
  
     for (let i = 0; i < this.resp1[index].statewise.length; i++) {

      if(this.resp1[index].statewise[i].confirmed > 50){
        data.push([date,this.resp1[index].statewise[i].state,this.resp1[index].statewise[i].confirmed]);
      }
     }

  }
  alert(JSON.stringify(data));
  var dataFetch = data;
  var schemaFetch = [{
    name: "Date",
    type: "date",
    format: "%d-%m-%Y"
},{
  name: "Type",
  type: "string"
}, {
  name: "Cases",
  type: "number"
}];

  Promise.all([dataFetch, schemaFetch]).then(res => {
    let [data, schema] = res;
    let fusionDataStore = new FusionCharts.DataStore();
    let fusionTable = fusionDataStore.createDataTable(data, schema);
    this.dataSource3.data = fusionTable;
  });
}


fetchPredictData() {



  let data1 = [];
  
  for (let index = 0; index < this.resp1.length; index++) {

    
  let d = new Date(this.resp1[index].day);
  
  let date1 = d.getDate()+"-"+ (d.getMonth() +1)+"-"+d.getFullYear();  
  
  for (let index = 0; index < this.resp3.length; index++) {

    let d = new Date(this.resp3[index].date);
    let date2 = d.getDate()+"-"+ (d.getMonth() +1)+"-"+d.getFullYear();  
    
      if(date1 == date2){
        for (let i = 0; i < this.resp1[index].statewise.length; i++) {

          if(this.resp1[index].statewise[i].state == "Gujarat"){
            let actual = this.resp1[index].statewise[i].confirmed + this.resp1[index].statewise[i].recovered + this.resp1[index].statewise[i].deaths;

             //alert(date2 +" = "+this.resp1[index].statewise[i].confirmed +""+this.resp1[index].statewise[i].recovered +""+this.resp1[index].statewise[i].deaths)
            data1.push([date2,"Gujarat",this.resp3[index].Predicted_NoAtGujarat_Model_1_A,actual]);

          }
         }

      }

        
       }

  }

// alert(JSON.stringify(data1));

  var dataFetch1 = data1;
  var schemaFetch1= [{
    name: "Date",
    type: "date",
    format: "%d-%m-%Y"
},{
  name: "Type1",
  type: "string"
}, {
  name: "Predict Cases",
  type: "number"
},
{
  name: "Actual Cases",
  type: "number"
}];

  Promise.all([dataFetch1, schemaFetch1]).then(res => {
    let [data1, schema1] = res;
    let fusionDataStore1 = new FusionCharts.DataStore();
    let fusionTable1 = fusionDataStore1.createDataTable(data1, schema1);
    this.dataSource4.data = fusionTable1;
  });

 
}
type = "india";
dataFormat = "json";   

chartInstance: any = {};
    initialized(e) {
      this.chartInstance = e.chart;
     }
  events = {
    beforeRender: function(evt, args) {
    
    },
    entityRollover : (evt,data) => {
      document.getElementById("id1").innerHTML = "<b class='text-dark'>State : </b>" + data.label;
      document.getElementById("id2").innerHTML = "<b class='text-dark'>Cases : </b>" + data.value;
         //alert(this.IndiaState +""+this.IndiaCoronaValue)
      }
    }
}
