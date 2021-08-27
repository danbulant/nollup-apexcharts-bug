import ApexCharts from "apexcharts";

export const chart = (node, options) => {
    console.log(ApexCharts);
    let myChart = new ApexCharts(node, options)
    myChart.render()
  
    return {
        update(options) {
            myChart.updateOptions(options)
        },
    }
  }
  