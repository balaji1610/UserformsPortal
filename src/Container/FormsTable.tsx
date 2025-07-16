import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import type { IinitialFormState } from "../Interface/Interface";
export default function FormsTable() {
  const { allUsers } = useSelector(
    (state: { FormsSlice: IinitialFormState }) => state.FormsSlice
  );

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
              <th>location</th>
              <th>gender</th>
              <th>education</th>
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
                  <td>{el.location}</td>
                  <td>{el.gender}</td>
                  <td>{el.education}</td>
                  <td>
                    <Button variant="contained">View</Button>
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
