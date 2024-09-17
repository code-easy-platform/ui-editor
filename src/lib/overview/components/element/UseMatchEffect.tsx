import { IObservable } from 'react-observing'
import { useCallback, useEffect, useState } from 'react';


interface IUseMatchEffectProps {
  value?: IObservable<string | undefined>;
  matchWidthValue?: IObservable<string | undefined>;
}
export const useMatchEffect = ({ value: valueObservable, matchWidthValue: matchWitchValueObservable }: IUseMatchEffectProps) => {
  const [match, setMatch] = useState(false);


  const handleSet = useCallback((value: boolean) => {
    setMatch(old => old === value ? old : value);
  }, []);


  useEffect(() => {
    if (valueObservable === undefined) {
      handleSet(false);
      return;
    }
    if (matchWitchValueObservable === undefined) {
      handleSet(false);
      return;
    }

    handleSet(valueObservable.value === matchWitchValueObservable.value);
  }, [handleSet, valueObservable?.value, matchWitchValueObservable?.value]);

  useEffect(() => {
    if (valueObservable === undefined) return;
    if (matchWitchValueObservable === undefined) return;

    const valueSubscription = valueObservable.subscribe(value => handleSet(value === matchWitchValueObservable.value));
    const matchWitchValueSubscription = matchWitchValueObservable.subscribe(value => handleSet(value === valueObservable.value));

    return () => {
      valueSubscription.unsubscribe();
      matchWitchValueSubscription.unsubscribe();
    };
  }, [handleSet, valueObservable, matchWitchValueObservable]);


  return match;
};
