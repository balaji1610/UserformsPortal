import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import type { IinitialFormState } from "../Interface/Interface";
import { useNavigate } from "react-router-dom";
export default function FormsTable() {

  const { allUsers } = useSelector(
    (state: { FormsSlice: IinitialFormState }) => state.FormsSlice
  );

  const navigate = useNavigate();
  
  return (
    <div>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        {" "}
        <table cellPadding="10" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>name</th>
              <th>mobilenumber</th>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((el, index) => {
              return (
                <tr key={el.id}>
                  <td>{index + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.mobilenumber}</td>
                  <td>{el.email}</td>

                  <td>
                    <Button
                      variant="contained"
                      onClick={() => navigate(`/Dashboard/userlists/${el.id}`)}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Box>
    </div>
  );
}
