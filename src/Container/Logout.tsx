import { Box, Stack } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
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
          <Button onClick={() => navigate("/Dashboard")}>Form</Button>
        </Box>
        <Box>
          {" "}
          <Button onClick={() => navigate("/Dashboard/table")}>UserList</Button>
        </Box>

        <Box title="Logout" onClick={() => navigate("/")}>
          <ExitToAppIcon color="primary" fontSize="large" />
        </Box>
      </Stack>
    </div>
  );
}
