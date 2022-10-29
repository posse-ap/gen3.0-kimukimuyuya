'use strict';
{
  var ctx = document.getElementById('myChart1').getContext('2d');

  var blue_gradient = ctx.createLinearGradient(0, 0, 0, 500);
  blue_gradient.addColorStop(0, '#3CCFFF');
  blue_gradient.addColorStop(1, '#0F72BD');

  var myGraphChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      datasets: [{
        label: "学習時間",
        data: ['3', '4', '5', '3', '0', '0', '4', '2', '2', '8', '8', '2', '2', '1', '7', '4', '4', '3', '3', '3', '2', '2', '6', '2', '2', '1', '1', '1', '7', '8',],
        backgroundColor: blue_gradient,
        barPercentage: 0.6,
        borderRadius: 5,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            drawBorder: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            padding: 10,
            maxTicksLimit: 15,
            stepSize: 2,
            color: '#97B9D0',
            scaleFontSize: 40,
            beginAtZero: true
          }
        },
        y: {
          grid: {
            drawBorder: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            padding: 10,
            stepSize: 2,
            color: '#97B9D0',
            beginAtZero: true,
            callback: function (value, index, values) {
              return value + 'h';
            },
          }
        }
      }
    }
  });
}