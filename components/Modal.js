import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <Transition>
      <h1></h1>
    </Transition>
  );
}

export default Modal;
