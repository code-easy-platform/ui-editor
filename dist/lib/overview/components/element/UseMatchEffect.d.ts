import { IObservable } from 'react-observing';

interface IUseMatchEffectProps {
    effect: () => void;
    value?: IObservable<string | undefined>;
    matchWidthValue?: IObservable<string | undefined>;
}
export declare const useMatchEffect: ({ value: valueObservable, matchWidthValue: matchWitchValueObservable, effect }: IUseMatchEffectProps, deps: readonly any[]) => void;
export {};
