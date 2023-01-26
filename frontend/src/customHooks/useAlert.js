const { SweetAlertCntxt } = require("contextProvider/SweetAlertContext");
const { useContext } = require("react");

const useAlert = () => useContext(SweetAlertCntxt);
export default useAlert;
