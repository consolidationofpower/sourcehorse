import React from "react";
import api from "../api";
import JobsList from "../components/JobsList";

const user = {
  name: "Johnny Anyman",
  school: "University of Auckland",
  balance: 20,
  rating: 4,
  user_id: "db0010b5-8b41-4ebd-bf19-04aba31860c0"
};

export default () => <JobsList user={user} getJobs={api.getJobs} noJobsMessage={"No jobs available"} />;