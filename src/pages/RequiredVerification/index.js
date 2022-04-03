import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Page from "../../components/Page";
import Container from "../../components/Container";
import HeaderText from "../../components/HeaderText";
import vouch from '../../assets/Images/vouch-us.png';
import { useNavigate } from "react-router-dom";
//test



class Privacy extends Component {
  render() {
    return (
      <Page noLeftMargin>
        <Container
          height="md:h-[32rem] sm:h-1/6 lg:h-63pr"
          width="md:w-[32rem] sm:w-1/6 lg:w-1/3"
          padding="pt-3pr px-4pr sm:pl-2"
          className="flex flex-col"
          margin=" ml-16"
          mariginTop="mt-40 lg:mt-h26pr"
        >
          <center>
            <HeaderText noBold fontSize="text-4xl" className="pb-2pr">
              Verify With Vouched
            </HeaderText>
          </center>
          <img src={vouch} alt="vouch_icon" class="object-scale-down h-48 w-96"></img>
          <div>
            <div className="flex justify-between mb-h2pr">
              <Button
                solidGreen
                noPadding
                className="w-20pr lg:w-6pr"
                onClick={() => {
                  // props.onStateChange("signIn", {});
                }}
              >
                CANCEL
              </Button>
              <Button
                solidGreen
                noPadding
                className="w-20pr lg:w-6pr"
                onClick={() => {

                  useNavigate('/guest-dashboard');
                }}
              >
                VERIFY
              </Button>
            </div>
          </div>
        </Container>
      </Page>
    );
  }

}
export default Privacy;
