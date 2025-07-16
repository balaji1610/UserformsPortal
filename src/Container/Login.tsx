import { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

import type { crendentialType, IinitialState } from "../Interface/Interface";

export default function Login() {
  const navigate = useNavigate();

  const { registerUsers } = useSelector(
    (state: { CredentialsSlice: IinitialState }) => state.CredentialsSlice
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [logincredential, setLoginCredential] = useState({
    username: "",
    password: "",
  });

  const handleOnchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLoginCredential((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleOnLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!logincredential.username || !logincredential.password) {
      alert("Required");
    }

    const getUser = registerUsers.filter((el: crendentialType) => {
      return (
        el.username == logincredential.username &&
        el.password == logincredential.password
      );
    });

    if (getUser.length) {
      alert("Login SucessFull");
      navigate("/Dashboard");
    } else {
      alert("Invalid Credentials");
    }
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
            {" "}
            <Box>
              <AccountCircleIcon color="primary" fontSize="large" />
            </Box>
            <Box>
              <TextField
                required
                label="Email Address"
                sx={{ width: "16rem" }}
                type="email"
                name="username"
                onChange={(e) => handleOnchange(e)}
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
                    onChange={(e) => handleOnchange(e)}
                  />
                </FormControl>
              </Box>
            </Box>
            <Box>
              <Button
                type="submit"
                variant="contained"
                onClick={handleOnLoginClick}
              >
                LOGIN
              </Button>
            </Box>
            <Box>
              Don&apos;t have an account yet ?
              <Typography
                variant="subtitle1"
                color="primary"
                sx={{ display: "inline-block", cursor: "pointer" }}
                onClick={() => navigate("/createaccount")}
              >
                &nbsp;Create account
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
      {JSON.stringify(registerUsers)}
    </Box>
  );
}
