const ctx1 = document.getElementById('myChart1').getContext('2d');
const myChart1 = new Chart(ctx1,{
  type: 'bar',
  data: {
    labels: [' Tháng 1', ' Tháng 2', ' Tháng 3', ' Tháng 4', ' Tháng 5', ' Tháng 6', ' Tháng 7', ' Tháng 8', ' Tháng 9', ' Tháng 10', ' Tháng 11', ' Tháng 12',],
    datasets: [
      {
        label: 'Thu',
        data: [232, 267, 112, 182, 116, 174, 293, 260, 131, 187, 231, 279],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      },
      {
        label: 'Chi',
        data: [214, 238, 94, 168, 104, 158, 275, 248, 115, 165, 216, 257],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    axits: {
      y: {
        label: 'Thang'
      }
    },
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Doanh thu 2020'
      }
    }
  }
});
const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2,{
  type: 'line',
  data: {
    labels: [' Tháng 1', ' Tháng 2', ' Tháng 3', ' Tháng 4', ' Tháng 5', ' Tháng 6', ' Tháng 7', ' Tháng 8', ' Tháng 9', ' Tháng 10', ' Tháng 11', ' Tháng 12',],
    datasets: [
      {
        label: 'Thu',
        data: [232, 267, 112, 182, 116, 174, 293, 260, 131, 187, 231, 279],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
        ],
        linetension: 0.1,
      },
      {
        label: 'Chi',
        data: [214, 238, 94, 168, 104, 158, 275, 248, 115, 165, 216, 257],
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgb(255, 159, 64)',
        ],
      }
  ]
  },
  options: {
    plugins: {
      legend: {
        position: 'left',
      },
      title: {
        display: true,
        text: 'Doanh thu 2021'
      }
    }
  }
});
const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3,{
  type: 'doughnut',
  data: {
    labels: [' Tháng 1', ' Tháng 2', ' Tháng 3', ' Tháng 4', ' Tháng 5', ' Tháng 6', ' Tháng 7', ' Tháng 8', ' Tháng 9', ' Tháng 10', ' Tháng 11', ' Tháng 12',],
    datasets: [
      {
        label: 'Tong',
        data: [232, 267, 112, 182, 116, 174, 293, 260, 131, 187, 231, 279],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Doanh thu 2022'
      }
    }
  }
});