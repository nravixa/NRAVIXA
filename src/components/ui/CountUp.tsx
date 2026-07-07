"use client";

import { useInView, useMotionValue, animate } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

export function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2.5, // Slower default duration for a premium feel
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: any) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  // once: false ensures it replays when scrolling back
  const isInView = useInView(ref, { once: false, margin: '-10% 0px' });

  const getDecimalPlaces = (num: number) => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;
      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };
      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);
      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(Number(direction === 'down' ? to : from));
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    let controls: any;
    let timeoutId: NodeJS.Timeout;

    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      timeoutId = setTimeout(() => {
        controls = animate(motionValue, direction === 'down' ? from : to, {
          duration: duration,
          ease: "easeOut",
          onComplete: () => {
            if (typeof onEnd === 'function') onEnd();
          }
        });
      }, delay * 1000);

    } else {
      // Instantly reset the value when it leaves the viewport
      motionValue.set(direction === 'down' ? to : from);
      if (ref.current) {
        ref.current.textContent = formatValue(Number(direction === 'down' ? to : from));
      }
    }

    return () => {
      clearTimeout(timeoutId);
      if (controls) controls.stop();
    };
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration, formatValue]);

  useEffect(() => {
    const unsubscribe = motionValue.on('change', latest => {
      if (ref.current) {
        ref.current.textContent = formatValue(Number(latest));
      }
    });

    return () => unsubscribe();
  }, [motionValue, formatValue]);

  return <span className={className} ref={ref} />;
}
