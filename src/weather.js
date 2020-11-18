class Weather {

  look() {
    const weatherChoices = ['Stormy','Fine','Sunny','Snowy','Rainy','Hailing','Windy'];
    return weatherChoices[Math.floor(Math.random() * weatherChoices.length)];
  };
};

module.exports = Weather;
