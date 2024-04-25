import styles from "./singleNote.module.css";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { UpdateNoteModal } from "../updateNoteModal/UpdateNoteModal";

export const SingleNote = ({ note, groupId }) => {
  const dispatch = useDispatch();


  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.actual_note}>{note.content}</div>
      <div className={styles.date_time_area}>
        <span>{note.date}</span>
        <span>●</span>
        <span>{note.time}</span>
       
          
        
         
        

        <UpdateNoteModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          note={note}
          groupId={groupId}
        />
      </div>
    </div>
  );
};
