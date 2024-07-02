function throttle<T extends (...args: any[]) => void>(cb: T, interval: number): (...args: Parameters<T>) => void {
  let lastExecution = 0;
  let timeout: NodeJS.Timeout | null = null;
  let lastArgs: Parameters<T> | null = null;

  return function (...args: Parameters<T>) {
    const now = Date.now();

    if (now - lastExecution >= interval) {
      lastExecution = now;
      cb(...args);
    } else {
      lastArgs = args;
      if (!timeout) {
        timeout = setTimeout(() => {
          lastExecution = Date.now();
          if (lastArgs) {
            cb(...lastArgs);
            lastArgs = null;
          }
          timeout = null;
        }, interval - (now - lastExecution));
      }
    }
  };
}

export default throttle;


  