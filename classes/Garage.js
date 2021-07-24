class Garage {
  constructor(capacity) {
    this.vehicles = []
    this.capacity = capacity
  }

  add(vehicle) {
    if (!vehicle instanceof Vehicle) {
      throw new Error('Only vehicles are allowed in here!')
    }
    if (this.vehicles.length >= this.capacity) return "Sorry we're full."

    this.vehicles.push(vehicle)
    return 'Vehicle added!'
  }
}
