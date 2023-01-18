import { useColors } from "customHooks/ColorsHook"
import { ThemeStore } from "store/theme/colorStore"
import Icon from "./Icon";
import { HeadingText, SubHeading } from "./Typography";
import { GrFormClose } from "react-icons/gr";
import Button from "./Button";

export default function Model({
  id = "exampleModal",
  heading,
  children,
  footerButton,
  footerButtonOnClick,
}) {
  const { isDark } = ThemeStore.useState();
  const { colors } = useColors();

  return (
    <div
      class="modal fade"
      id={id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog  ">
        <div class={`modal-content ${isDark ? "bg-dark" : "bg-light"}`}>
          <div class="modal-header" style={{ borderColor: colors?.popupBg }}>
            <SubHeading>{heading}</SubHeading>
          </div>
          <div class="modal-body">{children}</div>
          {footerButton && (
            <div class="modal-footer" style={{ borderColor: colors?.popupBg }}>
              <Button variant="danger" data-bs-dismiss="modal">
                Cancel
              </Button>
              <Button data-bs-dismiss="modal" onClick={footerButton}>
                Ok
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}