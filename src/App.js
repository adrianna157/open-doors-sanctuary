import React from "react";
import { Authenticator } from "aws-amplify-react";
import Login from "./pages/Login";
import SignedIn from "./pages/SignedIn";
import CreateAccount from "./pages/CreateAccount";
import ConfirmAccount from "./pages/ConfirmAccount";
import AuthStore from "./helpers/AuthContext/AuthContext.js";
import AlertStore from "./helpers/AlertContext/AlertContext.js";
import ForgotPassword from "./pages/ForgotPassword";


const AuthStateApp = (props) => {
  return (
    <AuthStore>
      <AlertStore>
        <Authenticator hideDefault={true}>
          {/* <SignedIn override={"SignedIn"} />
          <Login override={"SignIn"} />
          <CreateAccount override={"SignUp"} />
          <ConfirmAccount override={"ConfirmSignUp"} />
          <ForgotPassword override={"ForgotPassword"} /> */}
        </Authenticator>
      </AlertStore>
    </AuthStore>


    // Andrii's Code

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="about" element={<About />} />
    //       <Route path="login-host" element={<LoginHost/>} />
    //       <Route path="login-guest" element={<LoginRefugee />} />
    //       <Route path="create-guest-account" element={<CreateGuestAccount />} />
    //       <Route path="become-host" element={<BecomeHost />} />
    //       <Route path="dashboard" element={<Dashboard />}/>
    //       <Route path="guest-list" element={<GuestList />} />
    //       <Route path="" element={<TitleScreen />} />
    //     </Route>
    //     <Route path="*" element={<NotFound /> } />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default AuthStateApp;
