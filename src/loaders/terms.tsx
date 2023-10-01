import JsonServer from "../services/JsonServer";

const loader = async ()=> {
  return JsonServer.loadTerms();
}
export default loader;