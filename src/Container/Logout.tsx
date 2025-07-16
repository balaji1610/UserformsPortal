import { Box, Stack } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export default function Logout() {
  const navigate = useNavigate();
  return (
    <div>
      <Stack
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={4}
      >
        <Box>
          <Button variant="outlined" onClick={() => navigate("/Dashboard")}>
            Form
          </Button>
        </Box>
        <Box>
          {" "}
          <Button
            variant="outlined"
            onClick={() => navigate("/Dashboard/userlists")}
          >
            UserList
          </Button>
        </Box>

        <Button color="error" onClick={() => navigate("/")}>
          Logout
        </Button>
      </Stack>
    </div>
  );
}
