import { useColors } from "customHooks/ColorsHook"
import { ThemeStore } from "store/theme/colorStore"
import Icon from "./Icon";
import { HeadingText } from "./Typography";
import { GrFormClose } from 'react-icons/gr';
import Button from "./Button";


export default function Model({ id = "exampleModal", heading }) {
    const { isDark } = ThemeStore.useState();
    const { colors } = useColors();

    var hideModal = hideModalInfo => {
        // (id).modal("hide");
    };

    return (
        <div class="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog  ">
                <div class={`modal-content ${isDark ? "bg-dark" : "bg-light"}`}>
                    <div class="modal-header" style={{ borderColor: colors?.popupBg }}>
                        <HeadingText>{heading}</HeadingText>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer" style={{ borderColor: colors?.popupBg }}>
                        <Button variant="danger" data-bs-dismiss="modal">Cancel</Button>
                        <Button onClick={hideModal}>Ok</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}