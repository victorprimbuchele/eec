class FlexCalculator {
  private readonly MIN_ENTER: 5 = 5;
  private readonly MAX_EXIT: 22 = 22;
  private readonly MAX_LAUNCH_IN_MINUTES: 180 = 180;
  private readonly TOTAL_JOURNEY_MIN: 510 = 510;

  firstEnter = {
    clock: '',
    minutes: 0
  };
  
  firstExit= {
    clock: '',
    minutes: 0
  };

  maxFirstExit = {
    clock: '',
    minutes: 0
  };

  maxSecondEnter = {
    clock: '',
    minutes: 0
  };

  secondEnter = {
    clock: '',
    minutes: 0
  };

  maxSecondExit = {
    clock: '',
    minutes: 0
  };

  secondExit = {
    clock: '',
    minutes: 0
  };

  firstJourney: number = 0;
  
  launch = {
    clock: '',
    minutes: 0
  }

  secondJourney: number = 0;

  totalJourney = {
    clock: '',
    minutes: 0
  };

  private getJustHour(clock: string) {
    return Number(clock.split(":")[0]);
  }

  private getJustMinute(clock: string) {
    return Number(clock.split(":")[1]);
  }

  private stringfyMinuteInHour(minutes: number) {
    let hour: any = String(Math.floor(minutes / 60));
    const min = String(minutes % 60);

    if(Number(hour) >= 24) {
      hour = String(hour % 24)
    }

    return `${hour.length === 1 ? '0' + hour : hour}:${min.length === 1 ? '0' + min : min}`;
  }

  private timeInMinutes(clock: string) {
    return this.getJustHour(clock) * 60 + this.getJustMinute(clock);
  }

  setFirstEnter(clock: string) {
    this.firstEnter.clock = clock;
    this.firstEnter.minutes = this.timeInMinutes(clock);
    return this
  }

  private firstEnterIsValid() {
    return (
      this.firstEnter && this.getJustHour(this.firstEnter.clock) > this.MIN_ENTER
    );
  }

  computeMaxFirstExit() {
    if(this.firstEnter) {
      this.maxFirstExit.minutes = this.firstEnter.minutes + 360;
      this.maxFirstExit.clock = this.stringfyMinuteInHour(this.maxFirstExit.minutes)
    }
    return this
  }

  setFirstExit(clock: string) {
    this.firstExit.clock = clock;
    this.firstExit.minutes = this.timeInMinutes(clock);
    return this
  }

  computeFirstJourney() {
    if (this.firstEnterIsValid() && this.firstExit) {
      this.firstJourney = 
        this.firstExit.minutes -
        this.firstEnter.minutes;
    }
    return this
  }

  computeMaxSecondEnter() {
    if(this.firstExit) {
      this.maxSecondEnter.minutes = this.firstExit.minutes + this.MAX_LAUNCH_IN_MINUTES
      this.maxSecondEnter.clock = this.stringfyMinuteInHour(this.maxSecondEnter.minutes) 
    }
    return this
  }

  setSecondEnter(clock: string) {
    this.secondEnter.clock = clock;
    this.secondEnter.minutes = this.timeInMinutes(clock);
    return this
  }

  computeTotalLaunch() {
    if(this.firstExit && this.secondEnter) {
      this.launch.minutes = this.secondEnter.minutes - this.firstExit.minutes;
      this.launch.clock = this.stringfyMinuteInHour(this.launch.minutes);
    }
    return this
  }

  computeMaxSecondExit() {
    if(this.firstJourney && this.secondEnter) {
      this.maxSecondExit.minutes = (this.TOTAL_JOURNEY_MIN - this.firstJourney) + this.secondEnter.minutes;
      this.maxSecondExit.clock = this.stringfyMinuteInHour(this.maxSecondExit.minutes);
    }
    return this
  }

  setSecondExit(clock: string) {
    this.secondExit.clock = clock;
    this.secondExit.minutes = this.timeInMinutes(clock);
    return this
  }

  computeSecondJourney() {
    if(this.secondEnter && this.secondExit) {
      this.secondJourney = this.secondExit.minutes - this.secondEnter.minutes;
    }
    return this
  }

  computeTotalJourney() {
    if(this.firstJourney && this.secondJourney) {
      this.totalJourney.minutes = this.firstJourney + this.secondJourney;
      this.totalJourney.clock = this.stringfyMinuteInHour(this.totalJourney.minutes);

    }
  }
};

export default FlexCalculator;