import React from "react";

import { VARIANTS } from "../../src/types/constants";
import { buildToastEntityForProps } from "../../src/core/toastEntityBuilder";

describe("Toast Entity Builder", () => {
  it("creates a partial toast entity for props", () => {
    const mock_partial_toast = {
      message: "Hello World!",
      variant: VARIANTS.SUCCESS,
    };
    expect(buildToastEntityForProps(mock_partial_toast)).toStrictEqual({});
  });
});
