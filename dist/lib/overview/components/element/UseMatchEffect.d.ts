import { IObservable } from 'react-observing';

interface IUseMatchEffectProps {
    value?: IObservable<string | undefined>;
    matchWidthValue?: IObservable<string | undefined>;
}
export declare const useMatchEffect: ({ value: valueObservable, matchWidthValue: matchWitchValueObservable }: IUseMatchEffectProps) => boolean;
export {};
