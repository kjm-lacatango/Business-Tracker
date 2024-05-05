import { BehaviorSubject } from "rxjs";

export class BaseService<Event, Value> {
    protected _events = new BehaviorSubject<Event | null>(null);
    protected _value = new BehaviorSubject<Value | null>(null);
    protected _values = new BehaviorSubject<Value[]>([]);
    protected _error = new BehaviorSubject<{message: string} | null>(null);
    protected _isLoading = new BehaviorSubject<boolean>(false);
    protected _errorMessage = new BehaviorSubject<string>("");
    protected _successMessage = new BehaviorSubject<string>("");
    // protected _token = new BehaviorSubject<string>("");

    // constructor() {
    //     localStorage.setItem("token", this._token.getValue());
    // }

    get events() { return this._events.asObservable(); }

    get value() { return this._value.getValue(); }

    get values() { return this._values.getValue(); }

    get isLoading() { return this._isLoading.getValue(); }

    get error() { return this._error.getValue(); }

    get errorMessage() { return this._errorMessage.getValue(); }

    get successMessage() { return this._successMessage.getValue(); }


    set value(value: Value | null) { this._value.next(value); }

    set values(values: Value[]) { this._values.next(values); }
}