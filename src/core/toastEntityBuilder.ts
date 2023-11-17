// using builder pattern because toast object is created multi-step
// 1. we create using helper buildToast
// 2. then we append container related details to it

import { ToastEntity, ToastEntityFactory } from "../types";
import {
  DEFAULT_TOAST_DISPLAY_TIME,
  DEFAULT_TOAST_POSITION,
} from "./constants";

const ToastFactory: ToastEntityFactory = {
  setDisplayTime: function (fractionalEntity) {
    this.displayTime = (fractionalEntity.displayTime ??
      DEFAULT_TOAST_DISPLAY_TIME) as ToastEntity["displayTime"];
    return this;
  },
  setId: function () {
    // check if the id exists first
    if (this.id) {
      return this;
    }
    // while(hasId){
    //   id = Math.random()
    // }
    // create a async generator function which checks for id and generates new
    this.id = Math.random();
    return this;
  },
  setMessage: function (fractionalEntity) {
    this.message = String(
      fractionalEntity.message as ToastEntity["message"]
    ).toLowerCase();
    return this;
  },
  setOnLoad: function (options) {
    this.onLoadCallback = options.onLoadCB as ToastEntity["onLoadCB"];
    return this;
  },
  setPosition: function (fractionalEntity) {
    this.position = fractionalEntity?.position ?? DEFAULT_TOAST_POSITION;
    return this;
  },
  setVariant: function (fractionalEntity) {
    const variant = fractionalEntity.variant ?? "info";
    this.variant = variant as ToastEntity["variant"];
    return this;
  },
  complete: function (fractionalEntity) {
    return { ...this, ...fractionalEntity };
  },
};

export function buildToastEntityForProps(
  fractionalToast: Partial<ToastEntity>
): Partial<ToastEntity> {
  let toastProps = Object.create(ToastFactory);
  return (
    toastProps
      // better to pass exact values
      .setMessage(fractionalToast)
      .setOnLoad(fractionalToast)
      .setVariant(fractionalToast)
      .complete(fractionalToast)
  );
}

export function buildToastEntityForMeta(
  fractionalToast: Partial<ToastEntity>
): Partial<ToastEntity> {
  let toastMetaData = Object.create(ToastFactory);
  // add default toast container
  return toastMetaData
    .setId()
    .setDisplayTime(fractionalToast)
    .setPosition()
    .complete(fractionalToast);
}

// TODO: A function to build toast for both Meta and Props
