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
                <li>
                  <b>Name :</b> {el.name}
                </li>
                <li>
                  <b>Mobilenumber</b> : {el.mobilenumber}
                </li>
                <li>
                  <b>Email</b> :{el.email}
                </li>
                <li>
                  <b>Location </b>: {el.location}
                </li>
                <li>
                  <b>Gender :</b> {el.gender}
                </li>
                <li>
                  <b>Education : </b>
                  {el.education}
                </li>
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
