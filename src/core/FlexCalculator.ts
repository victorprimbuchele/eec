import { string } from "yup";

class FlexCalculator {
  firstEnter: string = "";
  firstExit: string = "";
  secondEnter: string = "";
  secondExit: string = "";
  private readonly MIN_ENTER: 5 = 5;
  private readonly MAX_EXIT: 22 = 22;
  private readonly TOAL_JOURNEY: 8.5 = 8.5;

  getJustHour(time: string) {
    return Number(time.split(":")[0]);
  }

  getJustMinute(time: string) {
    return Number(time.split(":")[1]);
  }

  subtractHour() {}

  addHOur() {}

  setFirstEnter(firstEnter: string) {
    this.firstEnter = firstEnter;
  }
  setFirstExit(firstExit: string) {
    this.firstExit = firstExit;
  }
  setSecondEnter(secondEnter: string) {
    this.secondEnter = secondEnter;
  }
  setSecondExit(secondExit: string) {
    this.secondExit = secondExit;
  }
  validFirstEnter(time: string) {
    return (
      this.firstEnter && this.getJustHour(this.firstEnter) > this.MIN_ENTER
    );
  }
  computeFirstEnter() {
    if (this.validFirstEnter(this.firstEnter)) {
    }
  }
  computeFirstExit() {}
  computeSecondEnter() {}
  computeSecondExit() {}
}

// function sum(i: string, g: string) {
//    const firstHour = i.split(":")
//    const secondHour = g.split(":")

//    const minutesTotal =

// }

export default FlexCalculator;
