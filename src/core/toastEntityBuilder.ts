// using builder pattern because toast object is created in multi-step
// 1. we create toast object
// 2. then we append container related details to it

import { ToastEntity, ToastEntityFactory } from "../types";
import {
  DEFAULT_TOAST_DISPLAY_TIME,
  DEFAULT_TOAST_POSITION,
  DEFAULT_VARIANT,
} from "./constants";

const ToastFactory: ToastEntityFactory = {
  setDisplayTime: function (fractionalEntity) {
    this.displayTime = (fractionalEntity.displayTime ??
      DEFAULT_TOAST_DISPLAY_TIME) as ToastEntity["displayTime"];
    return this;
  },
  setId: function () {
    // check if the id exists first, given by user
    if (this.id) {
      return this;
    }
    this.id = `${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
    return this;
  },
  setMessage: function (fractionalEntity) {
    this.message = String(
      fractionalEntity.message as ToastEntity["message"]
    ).toLowerCase();
    return this;
  },
  setOnCloseCB: function (fractionalEntity) {
    this.onCloseCB = fractionalEntity.onCloseCB as ToastEntity["onCloseCB"];
    return this;
  },
  setOnLoadCB: function (fractionalEntity) {
    this.onLoadCallback = fractionalEntity.onLoadCB as ToastEntity["onLoadCB"];
    return this;
  },
  setPosition: function (fractionalEntity) {
    this.position = fractionalEntity?.position ?? DEFAULT_TOAST_POSITION;
    return this;
  },
  setVariant: function (fractionalEntity) {
    const variant = fractionalEntity.variant ?? DEFAULT_VARIANT;
    this.variant = variant as ToastEntity["variant"];
    return this;
  },
  commit: function (fractionalEntity) {
    return { ...this, ...fractionalEntity };
  },
  dispatch: function (fractionalEntity) {
    return Object.seal(fractionalEntity) as ToastEntity;
  },
};

export function buildToastEntityForProps(
  fractionalToast: Partial<ToastEntity>
): Partial<ToastEntity> {
  const factoryInstance = Object.create(ToastFactory);
  return factoryInstance
    .setMessage(fractionalToast)
    .setVariant(fractionalToast)
    .commit(fractionalToast);
}

export function buildToastEntityForMeta(
  fractionalToast: Partial<ToastEntity>
): Partial<ToastEntity> {
  const factoryInstance = Object.create(ToastFactory);

  return factoryInstance
    .setId()
    .setOnCloseCB(fractionalToast)
    .setOnLoadCB(fractionalToast)
    .setDisplayTime(fractionalToast)
    .setPosition(fractionalToast)
    .commit(fractionalToast);
}

export function dispatchToast(toast: ToastEntity): ToastEntity {
  const factoryInstance = Object.create(ToastFactory);
  return factoryInstance.dispatch(toast);
}
