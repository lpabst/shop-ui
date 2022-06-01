import modalContext from "../store/modalContext";

export function closeModal() {
  const { state, dispatch } = useContext(modalContext);
  return dispatch({ type: "CLOSE_MODAL" });
}
