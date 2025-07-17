import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { IinitialFormState, IallUsers } from "../Interface/Interface";
import { useState, useEffect } from "react";

export default function UserProfile() {
  const { id } = useParams();
  const { allUsers } = useSelector(
    (state: { FormsSlice: IinitialFormState }) => state.FormsSlice
  );
  const [selectedId, setSelecteId] = useState<IallUsers[]>([]);

  useEffect(() => {
    const getId: IallUsers[] = allUsers.filter((el) => el.id == id);

    if (getId.length) {
      setSelecteId(getId);
    }
  }, []);
  return (
    <div>
      <h1>User Profile {id}</h1>
      {selectedId.length ? (
        <div>
          {selectedId.map((el: IallUsers) => {
            return (
              <ul>
                <li>Name : {el.name}</li>
                <li>Mobilenumber : {el.mobilenumber}</li>
                <li>Email : {el.email}</li>
                <li>Location : {el.location}</li>
                <li>Gender : {el.gender}</li>
                <li>Education : {el.education}</li>
              </ul>
            );
          })}
        </div>
      ) : (
        <div>
          <h1>PROFILE NOT Found</h1>
        </div>
      )}
    </div>
  );
}
