import {BehaviorSubject} from "rxjs/BehaviorSubject";

export class BackgroundService {
  checked = new BehaviorSubject<boolean>(false);
}
