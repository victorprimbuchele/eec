type Tcheck = {
  clock: string;
  minutes: number;
};

type TcheckValueKeys<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

export default class FlexCalculator {
  private readonly MAX_LAUNCH_IN_MINUTES: 180 = 180;
  private readonly MIN_LAUNCH_IN_MINUTES: 60 = 60;
  private readonly TOTAL_JOURNEY_MIN: 510 = 510;

  firstCheckIn = {} as Tcheck;

  firstCheckOut = {} as Tcheck;
  maxFirstCheckOut = {} as Tcheck;
  minFirstCheckOut = {} as Tcheck;

  secondCheckIn = {} as Tcheck;
  maxSecondCheckIn = {} as Tcheck;
  minSecondCheckIn = {} as Tcheck;

  secondCheckOut = {} as Tcheck;
  maxSecondCheckOut = {} as Tcheck;

  firstJourney: number = 0;
  launch = {} as Tcheck;
  secondJourney: number = 0;

  totalJourney = {} as Tcheck;

  private checkSetter(
    prop: TcheckValueKeys<FlexCalculator, Tcheck>,
    clock: string,
    minutes?: number
  ) {
    this[prop].minutes = minutes ? minutes : this.timeInMinutes(clock);
    this[prop].clock = minutes
      ? this.stringfyMinuteInHour(this[prop].minutes)
      : clock;

    console.log(`${prop}`, this[prop]);
  }

  private getJustHour(clock: string) {
    return Number(clock.split(":")[0]);
  }

  private getJustMinute(clock: string) {
    return Number(clock.split(":")[1]);
  }

  private stringfyMinuteInHour(minutes: number) {
    let hour: any = String(Math.floor(minutes / 60));
    const min = String(minutes % 60);

    if (Number(hour) >= 24) {
      hour = String(hour % 24);
    }

    return `${hour.length === 1 ? "0" + hour : hour}:${
      min.length === 1 ? "0" + min : min
    }`;
  }

  private timeInMinutes(clock: string) {
    return this.getJustHour(clock) * 60 + this.getJustMinute(clock);
  }

  setFirstCheckIn(clock: string) {
    this.checkSetter("firstCheckIn", clock);
    return this;
  }

  computeMaxFirstCheckOut() {
    if (this.firstCheckIn) {
      this.checkSetter("maxFirstCheckOut", "", this.firstCheckIn.minutes + 360);
    }
    return this;
  }

  computeMinFirstCheckOut() {
    if (this.firstCheckIn) {
      this.checkSetter("minFirstCheckOut", "", this.firstCheckIn.minutes + 150);
    }
    return this;
  }

  setFirstCheckOut(clock: string) {
    this.checkSetter("firstCheckOut", clock);
    return this;
  }
  // @rever para turnos noturnos
  computeFirstJourney() {
    if (this.firstCheckIn && this.firstCheckOut) {
      this.firstJourney =
        this.firstCheckOut.minutes - this.firstCheckIn.minutes;
    }
    return this;
  }

  computeMaxSecondCheckIn() {
    if (this.firstCheckOut) {
      this.checkSetter(
        "maxSecondCheckIn",
        "",
        this.firstCheckOut.minutes + this.MAX_LAUNCH_IN_MINUTES
      );
    }
    return this;
  }

  computeMinSecondCheckIn() {
    if (this.firstCheckOut) {
      this.checkSetter(
        "minSecondCheckIn",
        "",
        this.firstCheckOut.minutes + this.MIN_LAUNCH_IN_MINUTES
      );
    }
    return this;
  }

  setSecondCheckIn(clock: string) {
    this.checkSetter("secondCheckIn", clock);
    return this;
  }

  // @rever para turnos noturnos
  computeTotalLaunch() {
    if (this.firstCheckOut && this.secondCheckIn) {
      this.checkSetter(
        "launch",
        "",
        this.secondCheckIn.minutes - this.firstCheckOut.minutes
      );
    }
    return this;
  }

  computeMaxSecondCheckOut() {
    if (this.firstJourney && this.secondCheckIn) {
      this.checkSetter(
        "maxSecondCheckOut",
        "",
        this.TOTAL_JOURNEY_MIN - this.firstJourney + this.secondCheckIn.minutes
      );
    }
    return this;
  }

  setSecondCheckOut(clock: string) {
    this.checkSetter("secondCheckOut", clock);
    return this;
  }

  // @rever para turnos noturnos
  computeSecondJourney() {
    if (this.secondCheckIn && this.secondCheckOut) {
      this.secondJourney =
        this.secondCheckOut.minutes - this.secondCheckIn.minutes;
    }
    return this;
  }

  // @rever para turnos noturnos
  computeTotalJourney() {
    if (this.firstJourney && this.secondJourney) {
      this.checkSetter(
        "totalJourney",
        "",
        this.firstJourney + this.secondJourney
      );
    }
  }
}
