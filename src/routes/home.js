import React from "react";
import Profile from "../components/Profile";
import JobForm from "../components/JobForm";
import JobsList from "../components/JobsList";
import Modal from "../components/Modal";
import AddJobButton from "../components/AddJobButton";

const user = {
  name: "Johnny Anyman",
  school: "University of Auckland",
  balance: 20,
  rating: 4,
  user_id: "db0010b5-8b41-4ebd-bf19-04aba31860c0"
};

export default () => (
  <React.Fragment>
    <Profile user={user} />

    <JobsList user={user} />

    <Modal>
      <Modal.Toggle>
        {openModal => <AddJobButton onClick={openModal} />}
      </Modal.Toggle>

      <Modal.Body>
        {({ closeModal }) => <JobForm user={user} onAfterLoad={closeModal} />}
      </Modal.Body>
    </Modal>
  </React.Fragment>
);
