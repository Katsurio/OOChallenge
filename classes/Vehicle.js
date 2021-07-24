class Vehicle {
  constructor(make, model, year) {
    ;(this.make = make), (this.model = model), (this.year = year)
  }

  honk() {
    return 'Beep'
  }

  toString() {
    return `This vehicle is the ${this.make} ${this.model} from ${this.year}.`
  }
}
