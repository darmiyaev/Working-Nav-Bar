function buttonClicked(inputPage) {
  if (inputPage === 'home') {
    document.getElementById('home').style = 'background-color: blue;'
    document.getElementById('about').style = 'background-color: #f1f1f1;'
    document.getElementById('mission').style = 'background-color: #f1f1f1;'
    document.getElementById('pageText').innerHTML = 'This is the home page'
  }
  else if (inputPage === 'about') {
    document.getElementById('home').style = 'background-color: #f1f1f1;'
    document.getElementById('about').style = 'background-color: blue;'
    document.getElementById('mission').style = 'background-color: #f1f1f1;'
    document.getElementById('pageText').innerHTML = 'This is the about page'
  }
  else {
    document.getElementById('home').style = 'background-color: #f1f1f1;'
    document.getElementById('about').style = 'background-color: #f1f1f1;'
    document.getElementById('mission').style = 'background-color: blue;'
    document.getElementById('pageText').innerHTML = 'This is the mission page'
  }
}
