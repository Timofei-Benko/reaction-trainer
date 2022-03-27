class countDownToZero {
  delay: number;
  startTime: number;
  elementToPrintTo: Element;

  constructor(params: { delay: number, startTime: number, elementToPrintTo: Element }) {
    this.delay = params.delay;
    this.startTime = params.startTime;
    this.elementToPrintTo = params.elementToPrintTo;
  }

  public start() {
    setTimeout(() => {
      const countDownToZero = setInterval(() => {
        this.elementToPrintTo.innerHTML = ((this.startTime - 1000) / 1000).toFixed(1);
        this.startTime -= 100;
        if (this.startTime === 900) {
          clearInterval(countDownToZero);
          this.elementToPrintTo.innerHTML = '0';
        }
      }, 100);
    }, this.delay);
  }

  public getCurrentTime() {
    return this.startTime;
  }
}

function countDown(params: { elementToPrintTo: Element, startTime: number }) {
  const countDownToZero = setInterval(() => {
    params.elementToPrintTo.innerHTML = ((params.startTime - 1000) / 1000).toFixed(1);
    params.startTime -= 100;
    if (params.startTime === 900) {
      clearInterval(countDownToZero);
      params.elementToPrintTo.innerHTML = '0';
    }
  }, 100);
}

export { countDownToZero };
