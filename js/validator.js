// This validator utilizaes bootstrap's validation classes for the styling

// instatiate a new validator using this
class Validator {

    constructor() {
        this.initRequired();
        this.initCurrencies();
    }

    // binds a function to the form field that checks whether the field's value is mpty or not whenever focus on the field is lost
    initRequired() {
        $(".required").each(function (index) {
            console.log("Adding empty validator for " + $(this));

            $(this).focusout(function () {
                console.log("input", $(this));
                $(this).removeClass('is-invalid');
                if ($(this).val() == "")
                    $(this).addClass('is-invalid');
            });
        });
    }

    // currency validation, inputs should have 2 decimal places
    initCurrencies() {
        $(".validate-currency").each(function (index) {
            var regex = /^\d+(?:\.\d{0,2})$/;

            $(this).focusout(function () {
                console.log("Adding empty validator for ", $(this));
                console.log("Input String", $(this).val());
                $(this).removeClass('is-invalid');
                if (!regex.test($(this).val())) {
                    $(this).val((parseFloat($(this).val()).toFixed(2)).toString());
                    console.log("Fixed String", $(this).val());
                }
            });
        });

    }

    set customEmail(email) {
        if (email.charAt(0) == "@") this.email = email;
    }

    get customEmail() {
        return this.email;
    }

    // clear all validation messages
    clearMessages() {
        $(".validator-message").each(function (index) {
            $(this).html("");
        });
    }

    // call this function before sending your post request
    checkValidations() {
        var isValid = true;
        var isEmailValid = true;
        var isCurrencyValid = true;
        var message = "<ul style='decorations:none'>";
        var email = this.customEmail;

        // check required fields
        $(".required").each(function (index) {
            console.log("Checking required fields..");
            if ($(this).val() == "") {
                $(this).addClass('is-invalid');
                isValid = false;
            }
        });

        // check currencies
        $(".validate-currency").each(function (index) {
            console.log("Checking currency fields..");

            var regex = /^\d+(?:\.\d{0,2})$/;
            var numStr = $(this).val();
            console.log(numStr);
            if (!regex.test(numStr)) {
                isCurrencyValid = false;
            }
        });

        // chec custom emails
        $(".validate-custom-email").each(function (index) {
            console.log("Checking email fields..");

            console.log($(this).val() + "  ??  " + email);
            if ($(this).val().indexOf(email) !== -1) {
                //
            } else {
                isEmailValid = false;
            }
        });

        if (!isValid || !isEmailValid) {
            if (!isValid) message = message + '<li>Please fill up all required field(s)!</li>';
            if (!isEmailValid) message = message + '<li>Email extension should be <b>' + email + '</b></li>';
            if (!isCurrencyValid) message = message + '<li>Observe proper currency format!</li>';
            message = message + "</ul>";
            $(".validator-message").html(message);
        }
        else $(".validator-message").html('');

        //console.log($(".validator-message").html());
        var retVal = isValid && isEmailValid;
        return retVal;
    }

    
}
