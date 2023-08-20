/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import SignIn from "../Forms/SignIn";
import SignUp from "../Forms/SignUp";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import {
  StyledContainer,
  StyledPaper,
  StyledAvatar,
  StyledTypography,
} from "./Styles";
import { Typography, Grid, Button } from "@mui/material";

const AuthPage = (props) => {
  const [isSignIn, setIsSignIn] = useState(false);

  const switchForm = () => {
    setIsSignIn((isSignIn) => !isSignIn);
  };

  return (
    <div className="background">
      <StyledContainer maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xl={8} lg={8} md={12} sm={12}>
            <StyledPaper elevation={2}>
              <StyledPaper elevation={2}>
                <StyledTypography variant="h5">
                  🌟 Swift Chat App 🌟
                </StyledTypography>
                <StyledTypography variant="h6">
                  Your Ultimate Real-Time Chat Experience
                </StyledTypography>
                <StyledTypography variant="body2">
                  Discover seamless communication like never before with Swift
                  Chat – a cutting-edge real-time chat application meticulously
                  crafted to redefine the way you connect with friends, family,
                  and colleagues.
                </StyledTypography>
                <StyledTypography variant="body2">
                  Powered by the latest technologies, Swift Chat brings together
                  the power of Node.js, the flexibility of React.js, and the
                  dynamic capabilities of ChatEngine.io to create a
                  communication platform thats both immersive and intuitive.
                </StyledTypography>
                <StyledTypography variant="h6">💥 Features 💥</StyledTypography>
                <StyledTypography variant="body2">
                  🚀 Instant Real-Time Messaging: Say goodbye to waiting and
                  hello to instant conversations. Swift Chat ensures that your
                  messages are delivered and received in real time, giving you a
                  natural and fluid chat experience.
                </StyledTypography>
                <StyledTypography variant="body2">
                  📷 Rich Media Sharing: Express yourself beyond words with
                  Swift Chat's integrated media sharing capabilities. Share
                  photos, videos, and documents with a simple click, making
                  conversations more engaging and interactive.
                </StyledTypography>
                <StyledTypography variant="body2">
                  🔒 Security and Privacy: Your conversations are precious, and
                  Swift Chat understands that. With end-to-end encryption and
                  secure authentication mechanisms, your chats are private and
                  protected, ensuring that your sensitive information remains
                  confidential.
                </StyledTypography>
                <StyledTypography variant="body2">
                  Created By: Hussam Odeh 😎
                </StyledTypography>
              </StyledPaper>
            </StyledPaper>
          </Grid>

          <Grid item xl={4} lg={4} md={12} sm={12}>
            <StyledPaper elevation={2}>
              <StyledPaper elevation={2}>
                <StyledAvatar>
                  <ChatRoundedIcon />
                </StyledAvatar>
                <Typography variant="h5">
                  {isSignIn ? "Sign In" : "Sign Up"}
                </Typography>
                {isSignIn ? (
                  <SignIn onAuth={props.onAuth} />
                ) : (
                  <SignUp onAuth={props.onAuth} />
                )}
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Button variant="filled" onClick={switchForm}>
                      {isSignIn
                        ? "don't have an account? sign up"
                        : "already have an account? sign in"}
                    </Button>
                  </Grid>
                </Grid>
              </StyledPaper>
            </StyledPaper>
          </Grid>
        </Grid>
      </StyledContainer>
    </div>
  );
};

export default AuthPage;
