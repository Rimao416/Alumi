import React from "react";
import VerticalForm from "../../forms/form-wizard/VerticalForm";
import HorizentalWizard from "../../forms/form-wizard/HorizentalWizard";
function TeacherAddPage() {
  return (
    <div className=" space-y-5">
      <div>
        <VerticalForm title="Ajout d'un professeur"   /> 
      </div>
    </div>
  );
}

export default TeacherAddPage;
