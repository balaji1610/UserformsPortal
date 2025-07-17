"use client";
import { useState } from "react";
import { Box, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import { signUp } from "../app/CredentialsSlice";
import { useDispatch } from "react-redux";
import type { crendentialType } from "../Interface/Interface";
export default function CreateAccount() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [credential, setCredential] = useState<crendentialType>({
    username: "",
    password: "",
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setCredential((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleOnSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(signUp(credential));
    alert("Account Created SucessFully");
  };

  return (
    <Box>
      <Stack
        direction="column"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <Box
          sx={{
            border: "3px solid #E4E0E1",
            padding: "2rem",
            borderRadius: "20px",
          }}
          component="form"
        >
          <Stack
            direction="column"
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <PersonAddAltRoundedIcon color="primary" fontSize="large" />
            </Box>
            <Box>
              <Typography variant="subtitle1">Create a new account</Typography>
            </Box>
            <Box>
              <TextField
                required
                label="Email Address"
                sx={{ width: "16rem" }}
                type="email"
                name="username"
                onChange={(e) => handleOnChange(e)}
              />
            </Box>
            <Box>
              <Box>
                {" "}
                <FormControl variant="outlined" required>
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    name="password"
                    onChange={(e) => handleOnChange(e)}
                  />
                </FormControl>
              </Box>
            </Box>
            <Box>
              <Button
                type="submit"
                variant="contained"
                onClick={handleOnSignUp}
              >
                SIGN UP
              </Button>
            </Box>
            <Box>
              Already have an account ?
              <Typography
                variant="subtitle1"
                color="primary"
                sx={{ textAlign: "center", cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                Login
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
