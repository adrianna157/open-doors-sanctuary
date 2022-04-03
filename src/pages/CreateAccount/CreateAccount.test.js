import React from 'react'
import Store from "../../helpers/AuthContext/AuthContext.js"
import AlertStore from "../../helpers/AlertContext/AlertContext.js";
import renderer from "react-test-renderer";
import CreateAccount from "./index.js";

describe('The CreateAccount Page Renders Correctly', () => {
    it('Should Render CreateAccount Page Component Page 1', () => {
        const component = renderer.create(
          <Store>
            <AlertStore>
              <CreateAccount authState="signUp" />
            </AlertStore>
          </Store>
        ).toJSON();
        expect(component).toMatchSnapshot()
    });

    it('Should Render CreateAccount Page Component Page 2', () => {
        const component = renderer.create(
          <Store>
            <AlertStore>
              <CreateAccount authState="signUp" initialPage="page-two" />
            </AlertStore>
          </Store>
        );

        expect(component.toJSON()).toMatchSnapshot()
    });

    it("Should not Render CreateAccount Page Component", () => {
      const component = renderer
        .create(
          <Store>
            <AlertStore>
              <CreateAccount />
            </AlertStore>
          </Store>
        )
        .toJSON();
      expect(component).toMatchSnapshot();
    });
});