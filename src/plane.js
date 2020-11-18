class Plane {
  constructor(name, airport) {
    this.name = name;
    this.location = airport;
    this.destination = '';
    airport.land(this);
  }

  land() {
    const request_to_land = this.destination.land(this);
    if (this.location != "In Air") {
      return "Can't land, if already on the ground.";
    } else if (this.destination.isHangerFull()) {
      return `${this.destination.name} airport is full, sorry`;
    } else if (this.destination.isItStormy()) {
      return 'Weather is Stormy, landing aborted.';
    } else {
      this.location = this.destination;
      this.destination = '';
      return `${this.name} has landed at ${this.location.name}.`;
    }
  };

  takeOff(destination) {
    if ((!destination) || (destination === this.location)) {
      return 'Invalid destination, take off aborted.'
    } else if (this.location === "In Air") {
      return "Can't take off, whilst in flight";
    } else if (this.location.isItStormy()) {
      return 'Weather is Stormy, take off aborted.'
    } else {
      this.location.takeOff(this);
      this.destination = destination;
      this.location = 'In Air';
      return `${this.name} has taken off, flying to ${this.destination.name}`;
    };
  };
};

module.exports = Plane;
