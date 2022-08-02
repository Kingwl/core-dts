Observable.from;
Observable.of;
Observable.prototype.subscribe;
Symbol.observable;

new Observable<number>((observer) => {
  observer.next(42);
  observer.complete();
  observer.closed;
  observer.error(new Error());

  return () => {
    console.log(42);
  };
});

var ob = new Observable<number>((observer) => {
  observer.closed;

  return {
    unsubscribe() {
      console.log(42);
    },
    get closed() {
      return false;
    },
  };
});

const sub = ob.subscribe({
  next(value) {},
  error(error) {},
  complete() {},
});
const ssb = ob.subscribe(() => {
  console.log(42);
});

sub.unsubscribe();
sub.closed;

const aa = Observable.of(1, 2, 3);
const bb = Observable.from({
  [Symbol.observable]() {
    return Observable.of(false, true);
  },
});
