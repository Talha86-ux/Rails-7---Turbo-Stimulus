import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="character-counter"
export default class extends Controller {
  static targets = ["input", "count"]
  connect() {
    this.updateCounter()
  }

  updateCounter() {
    const length = this.inputTarget.value.length
    const output = this.countTarget.value
    console.log('Inside stimulus controller', length)
    this.countTarget.textContent = `${length} / 20`
  }
}
