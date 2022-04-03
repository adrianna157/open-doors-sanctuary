import React from 'react'
import Store from "../../helpers/AuthContext/AuthContext.js"
import AlertStore from "../../helpers/AlertContext/AlertContext.js";
import renderer from "react-test-renderer";
import ConfirmAccount from "./index.js";

describe('The CreateAccount Page Renders Correctly', () => {
    it('Should Render ConfirmAccount Page Component', () => {
        const component = renderer.create(
          <Store>
            <AlertStore>
              <ConfirmAccount authState="confirmSignUp" />
            </AlertStore>
          </Store>
        ).toJSON();
        expect(component).toMatchSnapshot()
    });

    it("Should not Render ConfirmAccount Page Component", () => {
      const component = renderer
        .create(
          <Store>
            <AlertStore>
              <ConfirmAccount />
            </AlertStore>
          </Store>
        )
        .toJSON();
      expect(component).toMatchSnapshot();
    });
});