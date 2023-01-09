import {
  allTimeByQuarterLabels,
  quarterByDeliveryLabel,
  quarterByProductionLabel,
  allTimeByQuarterData,
  yearByQuarterLabels,
  yearByQuarterData,
} from './data'

const data = allTimeByQuarterData
const delivery = data.map(data => data.value.delivery)
const production = data.map(data => data.value.production)

const data2 = yearByQuarterData(2022)
const delivery2 = data2.map(data => data.value.delivery)
const production2 = data2.map(data => data.value.production)

// 년도별 생산/딜리버리 데이터
export const allTimeByData = {
  labels: allTimeByQuarterLabels,
  datasets: [{
    label: quarterByProductionLabel, // 생산 라벨
    data: production, // 생산 데이터
    backgroundColor: 'rgba(223,83,83,1)',
    hoverBackgroundColor: 'rgba(223,83,83,0.6)',
  },{
    label: quarterByDeliveryLabel, // 딜리버리 라벨
    data: delivery, // 딜리버리 데이터
    backgroundColor: 'rgba(20,151,238,1)',
    hoverBackgroundColor: 'rgba(20,151,238,0.6)',
  }]
};
export const allTimeByOptions = {
  responsive: true,
  // indexAxis: 'y'
}


export const yearByData = {
  labels: yearByQuarterLabels,
  datasets: [{
    label: quarterByProductionLabel,
    data: production2,
    backgroundColor: 'yellowgreen',
    borderColor: 'transparent',
    borderWidth: 1
  },{
    label: quarterByDeliveryLabel,
    data: delivery2,
    backgroundColor: 'skyblue',
    borderColor: 'transparent',
    borderWidth: 1
  }]
}
export const yearByOptions = {
  responsive: true,
  // indexAxis: 'y'
}