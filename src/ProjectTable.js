import React, { useState } from "react";
import "./App.css";
import Pagination from "./Pagination";


const ProjectsTable = ({ projects }) => {
  const recordsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects?.length / recordsPerPage);

  const currentRecords = projects?.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Kickstarter Projects</h1>
      <table role="table" aria-label="Kickstarter Projects">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords?.map((project, index) => (
            <tr key={index}>
              <td>{(currentPage - 1) * recordsPerPage + index + 1}</td>
              <td>{Math.round(project["percentage.funded"])}</td>
              <td>${project["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProjectsTable;
