// using builder pattern because toast object is created multi-step
// 1. we create using helper buildToast
// 2. then we append container related details to it

import { ToastEntity, ToastProps } from "../../types/core";

//create interface
const ToastEntityFactory = {
  setDisplayTime: function (fractionalEntity: Partial<ToastEntity>) {
    this.displayTime =
      fractionalEntity.displayTime as ToastEntity["displayTime"];
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
  setMessage: function (fractionalEntity: Partial<ToastEntity>) {
    this.message = String(
      fractionalEntity.message as ToastEntity["message"]
    ).toLowerCase();
    return this;
  },
  setOnLoad: function (options: ToastEntity) {
    this.onLoadCallback = options.onLoadCB as ToastEntity["onLoadCB"];
    return this;
  },
  setVariant: function (fractionalEntity: Partial<ToastEntity>) {
    this.variant = fractionalEntity.variant as ToastEntity["variant"];
    return this;
  },
  export: function (fractionalEntity: Partial<ToastEntity>) {
    return { ...this, ...fractionalEntity };
  },
};

export function buildToastEntityForProps(
  fractionalToast: Partial<ToastEntity>
): Partial<ToastEntity> {
  let toastProps = Object.create(ToastEntityFactory);
  return toastProps
    .setMessage(fractionalToast)
    .setVariant(fractionalToast)
    .setOnLoad(fractionalToast)
    .export(fractionalToast);
}

export function buildToastEntityForMeta(
  fractionalToast: Partial<ToastEntity>
): Partial<ToastEntity> {
  let toastMetaData = Object.create(ToastEntityFactory);
  return toastMetaData
    .setId()
    .setDisplayTime(fractionalToast)
    .export(fractionalToast);
}
