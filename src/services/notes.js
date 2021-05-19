import { ActionCreators } from "../redux/notesReducer";

export const GetNotes = async (dispatch) => {
  try {
    // api
    const response = [
      { value: "Study for exam in 3 weeks", id: 1 },
      { value: "At this rate i will be master in no time", id: 2 },
      { value: "Build more full-stack application", id: 3 },
      { value: "I love writing notes", id: 4 },
    ];

    dispatch(ActionCreators.setNotes(response));
  } catch (error) {
    console.log(error.message);
  }
};

export const DeleteNote = async (dispatch, note) => {
  try {
    // api
    dispatch(ActionCreators.deleteNote(note));
  } catch (error) {
    console.log(error.message);
  }
};

export const NewNote = async (dispatch, note) => {
  try {
    // api
    const response = { value: note, id: 1 };

    dispatch(ActionCreators.newNote(response));
  } catch (error) {
    console.log(error.message);
  }
};

export const EditNote = async (dispatch, note) => {
  try {
    // api
    const response = { value: note, id: 1 };

    dispatch(ActionCreators.editNote(response));
  } catch (error) {
    console.log(error.message);
  }
};
