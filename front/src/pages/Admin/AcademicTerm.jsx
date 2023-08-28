import { useEffect, useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { HiSearch } from "react-icons/hi";
import Datatable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import {
  addAcademicTerm,
  fetchAcademicTerms,
} from "../../redux/slice/academicTermSlice";

import ModalHandleTerm from "../../components/modal/ModalHandleTerm";
function AcademicTerm() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const handleTerm = () => {
    dispatch(addAcademicTerm());
  };
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchAcademicTerms());
  }, [dispatch]);
  const data = useSelector((state) => state.academicTermReducer.academicTerm);
  console.log(data);

  const columns = [
    {
      name: "Période Académique",
      selector: (row) => row.name,
      sortable: true,
    },
  ];
  const handleFilter = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredAcademicTerms = data?.filter((row) => {
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
          <button className="btn " onClick={handleTerm}>
            Ajouter un nouvelle Période
          </button>
        </div>
      </div>

      <div className="datatable__grade">
        <Datatable
          columns={columns}
          data={filteredAcademicTerms}
          selectableRows
          pagination
        />
      </div>
      {modal && (
        <ModalHandleTerm onClose={() => setModal(false)} modal={modal} />
      )}
    </MainLayout>
  );
}

export default AcademicTerm;
