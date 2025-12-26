import createAddFormPage from "./form-page.js";
import createStorePage from "./store-page.js";

const navigate = (page) => {
  switch (page) {
    case "add-form":
      createAddFormPage();
      break;
    default:
      createStorePage();
  }
};

export default navigate;
