import throttle from './throttle';

jest.useFakeTimers();

describe('throttle function', () => {
  it('should throttle a function', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 100);

    
    throttledFunc();
    throttledFunc();
    throttledFunc();

    jest.advanceTimersByTime(50);

    
    expect(func).toHaveBeenCalledTimes(1);

    
    jest.advanceTimersByTime(100);

    
    expect(func).toHaveBeenCalledTimes(2);
  });
});
