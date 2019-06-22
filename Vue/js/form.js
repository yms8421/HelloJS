window.onload = setupContainer;
window.onresize = setupContainer;

function setupContainer() {
    var container = document.getElementById("work");
    container.style.marginLeft = ((window.innerWidth / 2) - (container.clientWidth / 2)) + "px";
}

new Vue({
    el: "#work",
    data: {
        text: "",
        people: [],
        validationMessage: "Bu alan zorunludur",
        isError: false,
        isWarning: false,
        isInvoked: false
    },
    methods: {
        add: function () {
            this.isInvoked = true;
            if (this.text) {
                this.isInvoked = false;
                this.people.push(this.text);
                this.text = "";
            }
            else {
                var self = this;
                self.validationMessage = "Bu alan zorunludur";
                self.isWarning = false;
                self.isError = true;
                setTimeout(function () {
                    self.isInvoked = false;
                }, 3000);
            }
        },
        onChange: function () {
            if (!this.text) {
                this.validationMessage = "Deðer olmadan ekleme yapýlamaz";
                this.isWarning = true;
                this.isError = false;
            }
        }
    },
    computed: {
        isRequired: function () {
            if (!this.text) {
                this.isError = true;
            }
            return this.text == "";
        }
    }
});