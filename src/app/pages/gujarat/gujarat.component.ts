import { Component, OnInit } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
import { CoronaService } from 'src/app/services/corona.service';



@Component({
  selector: 'app-gujarat',
  templateUrl: './gujarat.component.html',
  styleUrls: ['./gujarat.component.css']
})
export class GujaratComponent implements OnInit {

  constructor(private corona : CoronaService) { }
  coronaData: any = [];
  resp : any;
  coronaCases :any;
  dataSource:any;
  dataSource1:any;
  dataSource3:any;
  total = 0;
  myDataSource:any;
  totals:any;
  gujdata:any;
  ngOnInit() {
    this.corona.getCoronaDataDaily()
    .subscribe(data => this.coronadata(data));
  }

coronadata = (res:any) =>{
  this.resp = res;

  let sumAhmedabad = 0;
  let sumAmreli = 0;
  let sumAnand = 0;
  let sumAravalli = 0;
  let sumBanaskantha = 0;
  let sumBharuch = 0;
  let sumBhavnagar = 0;
  let sumBotad = 0;
  let sumChhotaUdepur= 0;
  let sumDahod = 0;
  let sumDevbhoomiDwarka = 0;
  let sumGandhinagar = 0
  let sumGirSomnath = 0;
  let sumJamnagar = 0;
  let sumJunagadh = 0;
  let sumKachchh = 0;
  let sumKheda = 0;
  let sumMehsana = 0;
  let sumMahisagar = 0;
  let sumMorbi = 0;
  let sumNarmada = 0;
  let sumNavsari = 0;
  let sumPanchmahal = 0;
  let sumPatan = 0;
  let sumPorbandar = 0;
  let sumRajkot = 0;
  let sumSabarkantha = 0;
  let sumSurat = 0;
  let sumSurendranagar = 0;
  let sumTapi =0;
  let sumDangs =0;
  let sumVadodara =0;
  let sumValsad = 0;
  let sumUnknown = 0;
  
  for(let i = 0; i < this.resp.length; i++) {

   
    if(this.resp[i].state == "Gujarat"){ 
      this.total += 1;

      if(this.resp[i].district == ""){
        sumUnknown += 1;
      }
    if(this.resp[i].district == "Ahmadabad"){
      sumAhmedabad += 1;
    }
    if(this.resp[i].district == "Amreli"){
      sumAmreli += 1;
    }
    if(this.resp[i].district == "Anand"){
      sumAnand += 1;
    }
    if(this.resp[i].district == "Aravalli"){
      sumAravalli += 1;
    }
    if(this.resp[i].district == "Banas Kantha"){
      sumBanaskantha += 1;
    }
    if(this.resp[i].district == "Bharuch"){
      sumBharuch += 1;
    }
    if(this.resp[i].district == "Bhavnagar"){
      sumBhavnagar += 1;
    }
    if(this.resp[i].district == "Botad"){
      sumBotad += 1;
    }
    if(this.resp[i].district == "Chota Udaipur"){
      sumChhotaUdepur+= 1;
    }
    if(this.resp[i].district == "Dahod"){
      sumDahod += 1;
    }
    if(this.resp[i].district == "Devbhoomi Dwarka"){
      sumDevbhoomiDwarka += 1;
    }
    if(this.resp[i].district == "Gandhinagar"){
      sumGandhinagar += 1;
    }
    if(this.resp[i].district == "Gir Somnath"){
      sumGirSomnath += 1;
    }
    if(this.resp[i].district == "Jamnagar"){
      sumJamnagar += 1;
    }
    if(this.resp[i].district == "Junagadh"){
      sumJunagadh += 1;
    }
    if(this.resp[i].district == "Kachchh"){
      sumKachchh += 1;
    }
    if(this.resp[i].district == "Kheda"){
      sumKheda += 1;
    }
    if(this.resp[i].district == "Mahesana" || this.resp[i].district == "Mehsana "){
      sumMehsana += 1;
    }
    if(this.resp[i].district == "Mahisagar"){
      sumMahisagar += 1;
    }
    if(this.resp[i].district == "Morbi"){
      sumMorbi += 1;
    }
    if(this.resp[i].district == "Narmada"){
      sumNarmada += 1;
    }
    if(this.resp[i].district == "Navsari"){
      sumNavsari += 1;
    }
    if(this.resp[i].district == "Panch Mahals"){
      sumPanchmahal += 1;
    }
    if(this.resp[i].district == "Patan"){
      sumPatan += 1;
    }
    if(this.resp[i].district == "Porbandar"){
      sumPorbandar += 1;
    }
    if(this.resp[i].district == "Rajkot"){
      sumRajkot += 1;
    }
    if(this.resp[i].district == "Sabar Kantha"){
      sumSabarkantha += 1;
    }
    if(this.resp[i].district == "Surat"){
      sumSurat += 1;
    }
    if(this.resp[i].district == "Surendranagar"){
      sumSurendranagar += 1;
    }
    if(this.resp[i].district == "Tapi"){
      sumTapi += 1;
    }
    if(this.resp[i].district == "Dangs (Ahwa)"){
      sumDangs += 1;
    }
    if(this.resp[i].district == "Vadodara"){
      sumVadodara += 1;
    }
    if(this.resp[i].district == "Valsad"){
      sumValsad += 1;
    }
  }
  }
  this.totals = this.total;
let listId = ["IN.GU.AB","IN.GU.AM","IN.GU.AN","IN.GU.AR","IN.GU.BK","IN.GU.BR","IN.GU.BN","IN.GU.BT","IN.GU.CU","IN.GU.DA","IN.GU.DD","IN.GU.GA","IN.GU.GS","IN.GU.JM","IN.GU.JG","IN.GU.KA","IN.GU.KD","IN.GU.MA","IN.GU.MS","IN.GU.MB","IN.GU.NR","IN.GU.NV","IN.GU.PC","IN.GU.PA","IN.GU.PO","IN.GU.RK","IN.GU.SB","IN.GU.SR","IN.GU.SD","IN.GU.TP","IN.GU.DG","IN.GU.VA","IN.GU.VL"];

  let CityName = ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udepur","Dahod","Dev bhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar",
    "Junagadh","Kachchh","Kheda","Mehsana","Mahisagar","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Dangs","Vadodara","Valsad","Unknown"];

  let GujaratCityNames= [];
  for (let index = 0; index < CityName.length; index++) {
    GujaratCityNames.push({
           label:CityName[index]
       });     
}
let total = 0;

  let statCases = [sumAhmedabad,sumAmreli,sumAnand,sumAravalli,sumBanaskantha,sumBharuch,sumBhavnagar,sumBotad,sumChhotaUdepur,sumDahod,sumDevbhoomiDwarka,sumGandhinagar,sumGirSomnath,sumJamnagar,
    sumJunagadh,sumKachchh,sumKheda,sumMehsana,sumMahisagar,sumMorbi,sumNarmada,sumNavsari,sumPanchmahal,sumPatan,sumPorbandar,sumRajkot,sumSabarkantha,sumSurat,sumSurendranagar,sumTapi,sumDangs,sumVadodara,sumValsad,sumUnknown]; 

    let stateCaseCount = [];
    let CombData = [];

    for (let index = 0; index < statCases.length; index++) {
        stateCaseCount.push({
               value:statCases[index]
           }); 
         CombData.push({
          value:statCases[index],
          label:CityName[index]
         })  
           
           total += statCases[index];    
    }


    function compareByValue(a, b) {
      const bandA = a.value;
      const bandB = b.value;
    
      let comparison = 0;
      if (bandA < bandB) {
        comparison = 1;
      } else if (bandA > bandB) {
        comparison = -1;
      }
      return comparison;
    }
  
    let SortCOnfirmCases = CombData.sort(compareByValue);

    // alert(JSON.stringify(SortCOnfirmCases));

    let DisrtictName =[];
    let DisrtictValue =[];

    for (let j = 0; j < SortCOnfirmCases.length; j++) {
      DisrtictName.push({
        label:SortCOnfirmCases[j].label
    });

      DisrtictValue.push({
        value:SortCOnfirmCases[j].value
    });
      
    }

    // coron list
      
      for (let index1 = 0; index1 < SortCOnfirmCases.length; index1++) {
        this.coronaData.push({
          stateCase: SortCOnfirmCases[index1].value,
          stateName :SortCOnfirmCases[index1].label
           });     
       }

 let  GujData = [];
   for (let index1 = 0; index1 < statCases.length; index1++) {
       GujData.push({
          id: listId[index1],
          value: statCases[index1],
          label :CityName[index1], 
           }); 
       }

//Corona State

this.gujdata={
  colorrange: {
    minvalue: "0",
    startlabel: "Low",
    endlabel: "High",
    code: "#6baa01",
    gradient: "1",
    color: [{
        maxvalue: "300",
        code: "#FFDD44",
        displayValue: "Median"
    }, {
        maxvalue: "2000",
        code: "#FF0000"
    }]
},
     chart: {
                  caption: "Gujarat",
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
             
          data :GujData
  };

//
    // corona Graph
    
  this.coronaCases= {
    chart: {
      caption: "Corona Cases State Wise",
      xaxisname: "Cases",
      yaxisname: "Cases",
      numberprefix: "",
      numberSuffix: "",
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
          category: DisrtictName
        }
    ],
    dataset: [
      {
        seriesname: "Cases",
        data : DisrtictValue         
      },
     
      {
        seriesname: "Line",
        renderas: "line",
        parentYAxis: "S",
        showValues: "0",
        data: DisrtictValue
     }
    ]
  };

  this.dataSource = this.coronaCases;
  this.dataSource1 = this.gujdata; 


}
type = "gujarat";
dataFormat = "json";

}
