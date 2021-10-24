export class Modal {

    private modal = document.getElementById("myModal");
    private message = document.getElementById("message")

    constructor() {
        this.init()
    }

    init() {
        // Get the modal

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0] as HTMLElement;

        // When the user clicks on <span> (x), close the modal
        span.onclick = () => {
            this.modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = (event) => {
            if (event.target == this.modal) {
                this.modal.style.display = "none";
            }
        }
    }


    open(message: string) {
        this.setMessage(message);
        this.modal.style.display = "block"
    }

    setMessage(message: string) {
        this.message.innerHTML = message;
    }

}