interface Observer<T> {
  start?(subscription: Subscription): void;

  next?(value: T): void;
  error?(error: any): void;
  complete?(): void;
}

interface ObservableLike<T> {
  [Symbol.observable](): Observable<T>;
}

interface SubscriptionObserver<T> {
  next(value: T): void;
  error(error: any): void;
  complete(): void;
  get closed(): Boolean;
}

type SubscriberFunction<T> = (
  observer: SubscriptionObserver<T>,
) => Subscription | (() => void);

interface ObservableConstructor {
  readonly prototype: Observable<any>;
  new <T>(subscriber: SubscriberFunction<T>): Observable<T>;

  from<T>(observer: ObservableLike<T>): Observable<T>;
  of<T>(...args: T[]): Observable<T>;
}

interface Subscription {
  unsubscribe(): void;
  get closed(): boolean;
}

interface Observable<T> extends ObservableLike<T> {
  subscribe(observer: Observer<T>): Subscription;
  subscribe(
    onNext?: (value: T) => void,
    onError?: (error: any) => void,
    onComplete?: () => void,
  ): Subscription;
}

declare var Observable: ObservableConstructor;

interface SymbolConstructor {
  readonly observable: unique symbol;
}
