import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import Datatable from "react-data-table-component";
import { HiSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { fetchAcademicPrograms } from "../../redux/slice/academicProgram";
import ModalHandleProgram from "../../components/modal/ModalHandleProgram";
function AcademicProgram() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const handleModal=()=>{
    // closeModal()
    setModal(true)
  }
  useEffect(() => {
    dispatch(fetchAcademicPrograms());
  }, [dispatch]);
  const data = useSelector(
    (state) => state.academicProgramReducer.academicProgram
  );
  console.log(data)

  const columns = [
    {
      name: "Programme Académique",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Durée",
      selector: (row) => row.duration,
      sortable: true,
    },
  ];
  const handleFilter = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredAcademicPrograms = data?.filter((row) => {
    const nameMatch = row.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return nameMatch;
  });

  return (
    <MainLayout>
      <div className="datatable__header">
        <div className="datatable__header--left input--form">
          <span className="datatable__header--icon">
            <HiSearch />
          </span>

          <input
            type="text"
            name="search"
            placeholder="Rechercher quelque chose"
            className="form-control datatable__header--input"
            id=""
            onChange={handleFilter}
          />
        </div>
        <div className="datatable__header--right">
          <button className="btn " onClick={handleModal}>
            Ajouter un nouveau programme
          </button>
        </div>
      </div>

      <div className="datatable__grade">
        <Datatable
          columns={columns}
          data={filteredAcademicPrograms}
          selectableRows
          pagination
        />
      </div>
      {modal && (
        <ModalHandleProgram onClose={() => setModal(false)} modal={modal} />
      )}
    </MainLayout>
  );
}

export default AcademicProgram;
