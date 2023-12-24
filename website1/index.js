const ctx = document.querySelector('canvas');
new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['C language', 'HTML', 'CSS', 'JavaScript', 'C++ language'],
      datasets: [{
        label: 'Skill by %',
        data: [35, 25, 20, 10, 10],
        backgroundColor: [
            'rgb(19, 224, 0)',
            'rgb(54, 162, 235)',
            'rgb(255, 208, 0)',
            'rgb(195, 0, 255)',
            ' rgb(255, 0, 0) '
          ],
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }

    }
  });