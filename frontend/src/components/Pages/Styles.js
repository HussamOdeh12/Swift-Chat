/* eslint-disable no-unused-vars */
import { styled, css } from "@mui/system";
import { Paper, Avatar, Typography, Container } from "@mui/material";

export const StyledContainer = styled(Container)(
  ({ theme }) => css`
    padding: 30px;
  `
);

export const StyledPaper = styled(Paper)(
  ({ theme }) => css`
    color: #272829;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 500px;
    background: rgba(255, 255, 255, 0.64);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    -webkit-backdrop-filter: blur(1.8px);
    border: 2px solid rgba(255, 255, 255, 1);
  `
);

export const StyledAvatar = styled(Avatar)(
  ({ theme }) => css`
    margin: 10px;
    background-color: #f50057;
  `
);

export const StyledTypography = styled(Typography)(
  ({ theme }) => css`
    margin-top: 20px;
    color: #272829;
  `
);
