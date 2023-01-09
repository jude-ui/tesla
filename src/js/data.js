let selectedYear = 2022;

export const quarterByDeliveryLabel = '분기별 배송'
export const quarterByProductionLabel = '분기별 생산'
export const yearByDeliveryLabel = '년도별 배송'
export const yearByProductionLabel = '년도별 생산'

// All Time / 분기별 데이터
export const allTimeByQuarterData = [
  { year: 2017, quarter: 1, value: { production: 25418, delivery: 25051 } },
  { year: 2017, quarter: 2, value: { production: 25708, delivery: 22026 } },
  { year: 2017, quarter: 3, value: { production: 25336, delivery: 26137 } },
  { year: 2017, quarter: 4, value: { production: 24565, delivery: 29967 } },
  
  { year: 2018, quarter: 1, value: { production: 34494, delivery: 29997 } },
  { year: 2018, quarter: 2, value: { production: 40740, delivery: 40768 } },
  { year: 2018, quarter: 3, value: { production: 80142, delivery: 83775 } },
  { year: 2018, quarter: 4, value: { production: 88944, delivery: 90966 } },
  
  { year: 2019, quarter: 1, value: { production: 63019, delivery: 77138 } },
  { year: 2019, quarter: 2, value: { production: 95356, delivery: 87048 } },
  { year: 2019, quarter: 3, value: { production: 97186, delivery: 96155 } },
  { year: 2019, quarter: 4, value: { production: 112095, delivery: 104891 } },
  
  { year: 2020, quarter: 1, value: { production: 88496, delivery: 102672 } },
  { year: 2020, quarter: 2, value: { production: 90891, delivery: 82272 } },
  { year: 2020, quarter: 3, value: { production: 139593, delivery: 145036 } },
  { year: 2020, quarter: 4, value: { production: 180667, delivery: 179757 } },
  
  { year: 2021, quarter: 1, value: { production: 180338, delivery: 184877 } },
  { year: 2021, quarter: 2, value: { production: 206421, delivery: 201304 } },
  { year: 2021, quarter: 3, value: { production: 237823, delivery: 241391 } },
  { year: 2021, quarter: 4, value: { production: 305840, delivery: 308650 } },
  
  { year: 2022, quarter: 1, value: { production: 305407, delivery: 310048 } },
  { year: 2022, quarter: 2, value: { production: 258580, delivery: 254695 } },
  { year: 2022, quarter: 3, value: { production: 365923, delivery: 343830 } },
  { year: 2022, quarter: 4, value: { production: 439701, delivery: 405278 } },
]
export const [ ...copyAllData ] = allTimeByQuarterData

export const basisDate = {
  startYear: allTimeByQuarterData[0].year,
  startQuarter: allTimeByQuarterData[0].quarter,
  endYear: allTimeByQuarterData[allTimeByQuarterData.length - 1].year,
  endQuarter: allTimeByQuarterData[allTimeByQuarterData.length - 1].quarter,
}

// All Time / 년도별 데이터
export const allTimeByYearData = () => {
  const arr = []
  for (let year = basisDate.startYear; year <= basisDate.endYear; year++) {
    const obj = {
      year,
      lastQuarter: 0,
      value: { delivery: 0, production: 0 },
    }
    allTimeByQuarterData.forEach(data => {
      if (year === data.year) {
        obj.value.delivery += data.value.delivery
        obj.value.production += data.value.production
        obj.lastQuarter = data.quarter
      }
    })
    arr.push(obj)
  }
  return arr
}

// 년도별 분기 데이터
export const yearByQuarterData = (selectedYear) => {
  return allTimeByQuarterData.filter(data => {
    if (data.year === selectedYear) return data
  })
}
  

// All Time / 분기별 라벨들
let startYear = basisDate.startYear
export const allTimeByQuarterLabels = allTimeByQuarterData.map((data, i) => {
  if (i !== 0 && (i % 4) === 0) startYear += 1
  return `${startYear} - Q${data.quarter}` // 2017 - Q1, 2017 - Q2 ...
});

// All Time / 년도별 라벨들
export const allTimeByYearLabels = []
for (let i = basisDate.startYear; i <= basisDate.endYear; i++) {
  // 마지막 년도
  if ( i === basisDate.endYear && (allTimeByQuarterData.length % 4 !== 0) ) {
    allTimeByYearLabels.push(`${allTimeByQuarterLabels[allTimeByQuarterLabels.length - 1]} 까지`)
    break;
  }
  // 마지막 년도가 아닌 경우
  allTimeByYearLabels.push(i) // 2017, 2018, 2019 ... 2022 - Q3까지
}

// Year / 분기 라벨
export const yearByQuarterLabels = allTimeByQuarterData
  .filter(data => {
    if ( selectedYear === data.year ) {
      return data.quarter
    }
  })
  .map(data => `Q${data.quarter}`)
