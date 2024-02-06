import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useDownloadExcel } from "react-export-table-to-excel";

const Show = () => {
  const tableref = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableref.current,
    filename: "search data",
    sheet: "userdata",
  });
  const [searchDoc, setSearchDoc] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const DeleteStudent = (id) => {
    axios
      .delete("http://localhost:5000/DeleteStd/" + id)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await axios.post(
          `http://localhost:5000/search/${searchKey}`
        );

        setSearchDoc(response.data.results);
      } catch (error) {
        console.error("Error during the search:", error);
      }
    };

    if (searchKey.trim() !== "") {
      handleSearch();
    }
  }, [searchKey]);

  return (
    <div>
      <input
        className="searchbar"
        type="text"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        placeholder="Enter search key"
      />
      <div className="Showtable">
        <ToggleButton
          className="mb-2 downloadbtn"
          id="toggle-check"
          type="checkbox"
          variant="outline-primary"
          onClick={onDownload}
        >
          download
        </ToggleButton>
        {searchDoc.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <table border={1} ref={tableref}>
            {/* Your table headers */}
            <thead>
              <tr>
                <th>ApplicationID</th>
                <th>sdate</th>
                <th>Action</th>
                <th>Action</th>
                <th>MeritNo</th>
                <th>RegistrationNo</th>
                <th>Name of Candidate</th>
                <th>Name of Father</th>
                <th>Name of Mother</th>
                <th>Category</th>
                <th>ReservedCategory</th>
                <th>Address</th>
                <th>MobileNo</th>
                <th>Tel</th>
                <th>Religion</th>
                <th>Caste</th>
                <th>Domicile</th>
                <th>District </th>
                <th>ANameofCandidatea</th>
                <th>Year</th>

                <th>AcademicYear</th>
                <th>Gender</th>
                <th>sdateBirth</th>
                <th>sdateBirthPlace</th>
                <th>LastSchool</th>
                <th>School</th>
                <th>SSCMM</th>
                <th>SSCSM</th>
                <th>SSCEM</th>
                <th>HSCMM</th>
                <th>HSCSM</th>
                <th>HSCEM</th>
                <th>NameofStudent</th>
                <th>ParentsIncome</th>
                <th> MeritMarkSSC</th>
                <th>StudentCategory</th>
                <th>WhetherEBC</th>
                <th>HandicapType</th>
                <th>DefenceType</th>
                <th>HSCMCVCPassedITIPassed</th>
                <th>HSCScienceHSCVocationalPassed</th>
                <th>MarksobtainedinScience</th>
                <th>AdmissionDate</th>
                <th>TotalFee</th>
                <th>StayinginHostel</th>
                <th>Branch</th>
                <th>EducationFacility</th>
                <th>NCC</th>
                <th>TypeofCandidiate</th>
                <th>MinorityCandidiate</th>
                <th>EMail</th>
                <th>Address2</th>
                <th>LandLineNo</th>
                <th>MoNo</th>
                <th>FullNameofParent</th>
                <th>FatherMotherGuardianof</th>
                <th>classBranch</th>
                <th>SODOMrMiss</th>
                <th>Declaredthis</th>
                <th>Deponent</th>
                <th>Verifiedat</th>
                <th>Ldate</th>
                <th>Lfrom</th>
                <th>Lsname</th>
                <th>Lsno</th>
                <th>Lpname</th>
                <th>Lpno</th>
                <th>Lspgname</th>
                <th>Lspgclass</th>
                <th>Lspgbranch</th>
                <th>Lspgcategory</th>
                <th>AllotmentLetter</th>
                <th>MarksheetorZFORM</th>
                <th>SSCMARKSHEET</th>
                <th>HSCMARKSHEET</th>
                <th>LEAVINGCERTIFICATE</th>
                <th>CASTCERTIFICATE</th>
                <th>NONCREMYLAYERCERTIFICATE</th>
                <th>GAPCERTIFICATE</th>
                <th>NATIONALITYCERTIFICATE</th>
                <th>DEFENCECERTIFICATE</th>
                <th>PHYSICALHANDICAPCERTIFICATE</th>
                <th>NCCCERTIFICATE</th>
                <th>DRAWINGCERTIFICATE</th>
                <th>DRAWINGCERTIFICATE</th>
                <th>INCOMECERTIFICATE</th>
                <th>INCOMECERTIFICATE</th>
                <th>IFANYDOCUMENTSREQUIRED</th>
                <th>Lssname</th>
                <th>Lssno</th>
                <th>Lspno</th>
                <th>Lsdate</th>
              </tr>
            </thead>
            <tbody>
              {searchDoc.map((student) => (
                <tr key={student._id}>
                  <td>{student.ApplicationID}</td>
                  <td>{student.sdate}</td>
                  <td>
                    <Link to={`/Newupdate/${student._id}`}>Update</Link>
                  </td>
                  <td>
                    <button onClick={(e) => DeleteStudent(student._id)}>
                      Delete
                    </button>
                  </td>
                  <td>{student.MeritNo}</td>
                  <td>{student.RegistrationNo}</td>
                  <td>{student.NameofCandidate}</td>
                  <td>{student.FNameofCandidate}</td>
                  <td>{student.FNameofCandidate}</td>
                  <td>{student.Category}</td>
                  <td>{student.ReservedCategory}</td>
                  <td>{student.Address}</td>
                  <td>{student.MobileNo}</td>
                  <td>{student.Tel}</td>
                  <td>{student.Religion}</td>
                  <td>{student.Caste}</td>
                  <td>{student.Domicile}</td>
                  <td>{student.District} </td>
                  <td>{student.ANameofCandidate}</td>
                  <td>{student.Year}</td>
                  <td>{student.AcademicYear}</td>
                  <td>{student.Gender}</td>
                  <td>{student.sdateBirth}</td>
                  <td>{student.sdateBirthPlace}</td>
                  <td>{student.LastSchool}</td>
                  <td>{student.School}</td>
                  <td>{student.SSCMM}</td>
                  <td>{student.SSCSM}</td>
                  <td>{student.SSCEM}</td>
                  <td>{student.HSCMM}</td>
                  <td>{student.HSCSM}</td>
                  <td>{student.HSCEM}</td>
                  <td>{student.NameofStudent}</td>
                  <td>{student.ParentsIncome}</td>
                  <td> {student.MeritMarkSSC}</td>
                  <td>{student.StudentCategory}</td>
                  <td>{student.WhetherEBC}</td>
                  <td>{student.HandicapType}</td>
                  <td>{student.DefenceType}</td>
                  <td>{student.HSCMCVCPassedITIPassed}</td>
                  <td>{student.HSCScienceHSCVocationalPassed}</td>
                  <td>{student.MarksobtainedinScience}</td>
                  <td>{student.AdmissionDate}</td>
                  <td>{student.TotalFee}</td>
                  <td>{student.StayinginHostel}</td>
                  <td>{student.Branch}</td>
                  <td>{student.EducationFacility}</td>
                  <td>{student.NCC}</td>
                  <td>{student.TypeofCandidiate}</td>
                  <td>{student.MinorityCandidiate}</td>
                  <td>{student.EMail}</td>
                  <td>{student.Address2}</td>
                  <td>{student.LandLineNo}</td>
                  <td>{student.MoNo}</td>
                  <td>{student.FullNameofParent}</td>
                  <td>{student.FatherMotherGuardianof}</td>
                  <td>{student.classBranch}</td>
                  <td>{student.SODOMrMiss}</td>
                  <td>{student.Declaredthis}</td>
                  <td>{student.Deponent}</td>
                  <td>{student.Verifiedat}</td>
                  <td>{student.Ldate}</td>
                  <td>{student.Lfrom}</td>
                  <td>{student.Lsname}</td>
                  <td>{student.Lsno}</td>
                  <td>{student.Lpname}</td>
                  <td>{student.Lpno}</td>
                  <td>{student.Lspgname}</td>
                  <td>{student.Lspgclass}</td>
                  <td>{student.Lspgbranch}</td>
                  <td>{student.Lspgcategory}</td>
                  <td>{student.AllotmentLetter}</td>
                  <td>{student.MarksheetorZFORM}</td>
                  <td>{student.SSCMARKSHEET}</td>
                  <td>{student.HSCMARKSHEET}</td>
                  <td>{student.LEAVINGCERTIFICATE}</td>
                  <td>{student.CASTCERTIFICATE}</td>
                  <td>{student.NONCREMYLAYERCERTIFICATE}</td>
                  <td>{student.GAPCERTIFICATE}</td>
                  <td>{student.NATIONALITYCERTIFICATE}</td>
                  <td>{student.DEFENCECERTIFICATE}</td>
                  <td>{student.PHYSICALHANDICAPCERTIFICATE}</td>
                  <td>{student.NCCCERTIFICATE}</td>
                  <td>{student.DRAWINGCERTIFICATE}</td>
                  <td>{student.DRAWINGCERTIFICATE}</td>
                  <td>{student.INCOMECERTIFICATE}</td>
                  <td>{student.INCOMECERTIFICATE}</td>
                  <td>{student.IFANYDOCUMENTSREQUIRED}</td>
                  <td>{student.Lssname}</td>
                  <td>{student.Lssno}</td>
                  <td>{student.Lspno}</td>
                  <td>{student.Lsdate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Show;
