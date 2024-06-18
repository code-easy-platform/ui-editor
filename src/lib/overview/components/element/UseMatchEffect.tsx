import { IObservable, useSelectorValue } from 'react-observing'
import { useEffect } from 'react';


interface IUseMatchEffectProps {
  effect?: () => void;
  value?: IObservable<string | undefined>;
  matchWidthValue?: IObservable<string | undefined>;
}
export const useMatchEffect = ({ value: valueObservable, matchWidthValue: matchWitchValueObservable, effect }: IUseMatchEffectProps, deps: readonly any[]) => {
  const isHovered = useSelectorValue(({ get }) => {
    if (!valueObservable) return false;
    const value = get(valueObservable);
    
    if (!matchWitchValueObservable) return false;
    const matchWitchValue = get(matchWitchValueObservable);

    return value === matchWitchValue;
  }, [...deps]);


  useEffect(() => {
    if (isHovered) effect?.();
  }, [isHovered]);

  return isHovered;
};
