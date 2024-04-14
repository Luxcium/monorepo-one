import { ISettledLeft } from "../../types";
import { IUnbox } from "./types/IUnbox";
import { SettleBox } from "./SettleBox";

export class SettledLeft<E = any>
  extends SettleBox<E>
  implements ISettledLeft, IUnbox<E>
{
  private _reason: E;
  protected constructor(
    reason: E,
    currentRejection: boolean = false,
    transformStep = -1,
    index = -1,
  ) {
    super(reason, "rejected", currentRejection, index, transformStep);
    this._reason = reason;
  }
  public unbox(): E {
    return this._reason;
  }
  get currentRejection(): true | false {
    if (super.currentRejection === true || super.currentRejection === false) {
      return super.currentRejection;
    }
    throw new Error(
      'NEVER: class SettledLeft currentRejection property must be as "true" or "false"',
    );
  }
  get status(): "rejected" {
    if (super.status === "rejected") {
      return super.status;
    }
    throw new Error(
      'NEVER: class SettledLeft status property must be as "rejected"',
    );
  }
  get reason(): E {
    return this._reason;
  }
  get rejected(): E {
    return this._reason;
  }
}
