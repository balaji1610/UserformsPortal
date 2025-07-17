import React from "react";
import { Box } from "@mui/material";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useSelector } from "react-redux";
import type { IinitialFormState } from "../Interface/Interface";
import { useDispatch } from "react-redux";
import { ChangeForm, formSumbit, reset } from "../app/FormsSlice";
export default function Forms() {
  const { userForm, allUsers } = useSelector(
    (state: { FormsSlice: IinitialFormState }) => state.FormsSlice
  );

  const dispatch = useDispatch();

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    dispatch(ChangeForm({ name, value }));
  };

  const handleOnSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(formSumbit());
    alert("SucessFully Submitted");
    dispatch(reset());
  };

  console.log(allUsers, "Array-allforms");

  return (
    <div>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: 300,
          }}
        >
          <TextField
            name="name"
            label="Name"
            value={userForm.name}
            onChange={handleOnChange}
          />
          <TextField
            name="mobilenumber"
            label="Mobile Number"
            value={userForm.mobilenumber}
            onChange={handleOnChange}
          />
          <TextField
            name="email"
            label="Email"
            value={userForm.email}
            onChange={handleOnChange}
          />
          <TextField
            name="location"
            label="Location"
            value={userForm.location}
            onChange={handleOnChange}
          />
          <FormControl>
            <InputLabel>Gender</InputLabel>
            <Select
              name="gender"
              label="Gender"
              value={userForm.gender}
              onChange={handleOnChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>

          <TextField
            name="education"
            label="Education"
            value={userForm.education}
            onChange={handleOnChange}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleOnSubmitClick}
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}
