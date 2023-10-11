// using builder pattern because toast object is created multi-step
// 1. we create using helper buildToast
// 2. then we append container related details to it

import { ToastProps, ToastVariants } from "../../types/core";

//Builder using Factory to finally create the toast

function CreateToastProps(options: ToastProps) {
  // matches prop names to user defined names
  const { variant, message, onLoadCallback, onUnloadCallback } = options;
  this.variant = variant;
  this.message = message;
  this.onLoadCallback = onLoadCallback;
  this.onUnloadCallback = onUnloadCallback;
}

function ToastBuilder() {
  // sets toast options and validate their values
  (this.toastOptions = {}),
    (this.setVariant = (variant: ToastVariants) => {
      this.toastOptions.variant = variant;
      return this;
    });
  this.setMessage = (message: string) => {
    this.toastOptions.message = String(message).toLowerCase();
    return this;
  };

  this.setOnLoad = (callback: Function) => {
    this.toastOptions.onLoadCallback = callback;
    return this;
  };

  this.setOnUnload = (callback: Function) => {
    this.toastOptions.onUnloadCallback = callback;
    return this;
  };

  this.build = () => {
    return new CreateToastProps(this.toastOptions);
  };
}

export default ToastBuilder;
