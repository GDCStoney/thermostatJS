class Airport {
  constructor(name, weather){
    this.name = name;
    this.weather = weather;
    this.hanger = [];
    this.capacity = 10;
  }

  land(plane) {
    if (this.hanger.length === this.capacity) {
      return "Denied, hanger full"
    } else {
      this.hanger.push(plane);
      return `${plane.name} is in the hanger`;
    };
  };

  takeOff(plane) {
    const index = this.hanger.indexOf(plane);
    if (index >- 1) {
      this.hanger.splice(index, 1);
    }
    return `${plane.name} has left the hanger`;
  };

  isItStormy() {
    return this.weather.look() === 'Stormy';
  };

  isHangerFull() {
    return this.hanger.length === this.capacity;
  };
};

module.exports = Airport;
