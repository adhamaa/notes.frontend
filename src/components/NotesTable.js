import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetNotes, DeleteNote } from "../services/notes";
import { Table, Button } from "react-bootstrap";
import { EditNoteModal } from "./NoteModal";

export const NotesTable = () => {
  const notes = useSelector((state) => state.notesReducer.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    GetNotes(dispatch);
  }, [dispatch]);

  return (
    <Table striped bordered variant="dark">
      <tbody>
        {notes.map((n) => (
          <tr>
            <td>{n.id}</td>
            <td style={{ textAlign: "left" }}>{n.value}</td>
            <td style={{ width: "3rem" }}>
              <EditNoteModal note={n.value} />
            </td>
            <td style={{ width: "3rem" }}>
              <Button
                className="btn btn-danger"
                onClick={() => DeleteNote(dispatch, n)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
