<script>
  import { Bar } from 'svelte-chartjs'
  import { allTimeByData, allTimeByOptions, yearByData, yearByOptions } from '@/js/chartOptionData'
  import {
    allTimeByQuarterData,
    allTimeByYearLabels,
    yearByDeliveryLabel,
    yearByProductionLabel,
    allTimeByYearData,
    allTimeByQuarterLabels,
    copyAllData,
    quarterByProductionLabel,
    quarterByDeliveryLabel,
  } from '@/js/data'

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  );
  

  let allTimeByChart;
  let yearByChart;
  let rdoChecked = 'allQuarter';
  let selected;

  function handleFn(e) {
    let delivery;
    let production;
    if(e.target.value === 'allYear') {
      const data = allTimeByYearData()
      delivery = data.map(data => data.value.delivery)
      production = data.map(data => data.value.production)
      allTimeByChart.data.labels = allTimeByYearLabels
      allTimeByChart.data.datasets[0].label = yearByProductionLabel // 생산
      allTimeByChart.data.datasets[1].label = yearByDeliveryLabel // 딜리버리
    } else {
      delivery = copyAllData.map(data => data.value.delivery)
      production = copyAllData.map(data => data.value.production)
      allTimeByChart.data.labels = allTimeByQuarterLabels
      allTimeByChart.data.datasets[0].label = quarterByProductionLabel // 생산
      allTimeByChart.data.datasets[1].label = quarterByDeliveryLabel // 딜리버리
    }
    allTimeByChart.data.datasets[0].data = production // 생산
    allTimeByChart.data.datasets[1].data = delivery // 딜리버리
    allTimeByChart.update();
  }

  function handleSelect(e) {
    const data = allTimeByQuarterData.filter(data => {
      if (data.year === parseInt(e.target.value)) return data
    })
    const delivery = data.map(data => data.value.delivery)
    const production = data.map(data => data.value.production)
    yearByChart.data.datasets[0].data = production
    yearByChart.data.datasets[1].data = delivery
    yearByChart.update();
  }

</script>
<h2 class="tit_">2017년 이후 배송/생산 데이터</h2>

<div class="wrap_chart">
  <div class="group_radio">
    <label class="lab_view">
      <input type="radio" name="autoData" value="allQuarter" bind:group={rdoChecked} on:change={handleFn}> 분기별 보기
    </label>
    <label class="lab_view">
      <input type="radio" name="autoData" value="allYear" bind:group={rdoChecked} on:change={handleFn}> 연도별 보기
    </label>
  </div>
  <Bar bind:chart={allTimeByChart} data={allTimeByData} options={allTimeByOptions} />
</div>
<div class="wrap_chart">
  <div class="group_select">
    <select bind:value={selected} on:change={handleSelect}>
      <option value="2022">2022년</option>
      <option value="2021">2021년</option>
      <option value="2020">2020년</option>
      <option value="2019">2019년</option>
      <option value="2018">2018년</option>
      <option value="2017">2017년</option>
    </select>
  </div>
  <Bar bind:chart={yearByChart} data={yearByData} options={yearByOptions} />
</div>
