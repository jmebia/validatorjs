// This validator utilizaes bootstrap's validation classes for the styling

// instatiate a new validator using this
class Validator {

    constructor() {
        this.initRequired();
        this.initCurrencies();
        this.initEmails();
    }

    // setters
    set customEmail(email) {
        if (email.charAt(0) == "@") this.email = email;
    }

    // getters
    get customEmail() {
        return this.email;
    }

    // binds a function to the form field that checks whether the field's value is empty or not whenever focus on the field is lost
    initRequired() {
        $(".required").each(function (index) {
            // DEBUG console.log("Adding empty validator for " + $(this));

            $(this).focusout(function () {
                // DEBUG console.log("input", $(this));
                $(this).removeClass('is-invalid');
                $("#error-required-"+index).remove();
                if ($(this).val() == "") {
                    $(this).addClass('is-invalid');
                    $(this).after("<li class='small text-danger' id='error-required-"+index+"'>This field is required!</li>");
                }
            });
        });
    }

    // currency validation, inputs should have 2 decimal places
    initCurrencies() {
        $(".validate-currency").each(function (index) {
            var regex = /^\d+(?:\.\d{0,2})$/;

            $(this).focusout(function () {
                // DEBUG console.log("Adding empty validator for ", $(this));
                // DEBUG console.log("Input String", $(this).val());
                $(this).removeClass('is-invalid');
                $("#error-currency-"+index).remove();
                if (!regex.test($(this).val())) {
                    $(this).val((parseFloat($(this).val()).toFixed(2)).toString());
                    console.log("Fixed String", $(this).val());
                    if (!regex.test($(this).val())) {
                        $(this).addClass("is-invalid");
                        $(this).after("<li class='small text-danger' id='error-currency-"+index+"'>Please input a valid currency value!</li>");
                    }
                }
            });
        });
    }

    initCustomEmails() {
        var email = this.customEmail;
        $(".validate-custom-email").each(function (index) {
            $(this).focusout(function () {
                // DEBUG console.log("Adding empty validator for ", $(this));
                // DEBUG console.log("Checking email fields..");
                $("#error-custom-email-"+index).remove();
                $(this).removeClass("is-invalid");

                console.log($(this).val() + "  ??  " + email);
                if ($(this).val().indexOf(email) !== -1) {
                    //
                } else {
                    $(this).after("<li class='small text-danger' id='error-custom-email-"+index+"'>This email should be <b>___"+email+"</b></li>")
                    $(this).addClass("is-invalid");
                }
            });
        });
    }

    initEmails() {
        var email = this.customEmail;
        $(".validate-email").each(function (index) {
            var emailPattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            $(this).focusout(function () {
                // DEBUG console.log("Adding empty validator for ", $(this));
                // DEBUG console.log("Checking email fields..");
                $("#error-email-"+index).remove();
                $(this).removeClass("is-invalid");

                console.log($(this).val() + "  ??  " + email);
                if (emailPattern.test($(this).val())) {
                    //
                } else {
                    $(this).after("<li class='small text-danger' id='error-email-"+index+"'>Please use a proper email format!</li>")
                    $(this).addClass("is-invalid");
                }
            });
        });
    }

    // call this function before sending your post requests
    checkValidations() {
        var isValid = true;
        var isEmailValid = true;
        var isCurrencyValid = true;
        var message = "<ul>";
        var email = this.customEmail;
        var emailPattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        // check required fields
        $(".required").each(function (index) {
            // DEBUG console.log("Checking required fields..");
            $(this).removeClass('is-invalid');
            $("#error-required-"+index).remove();
            if ($(this).val() == "") {
                $(this).addClass("is-invalid");
                $(this).after("<li class='small text-danger' id='error-required-"+index+"'>This field is required!</li>");
                isValid = false;
            }
        });

        // check currencies
        $(".validate-currency").each(function (index) {
            // DEBUG console.log("Checking currency fields..");

            var regex = /^\d+(?:\.\d{0,2})$/;
            var numStr = $(this).val();
            console.log(numStr);
            $(this).removeClass('is-invalid');
            $("#error-currency-"+index).remove();
            if (!regex.test(numStr)) {
                isCurrencyValid = false;
                $(this).addClass("is-invalid");
                $(this).after("<li class='small text-danger' id='error-currency-"+index+"'>Please input a valid currency value!</li>");
            }
        });

        // check custom emails
        $(".validate-custom-email").each(function (index) {
            // DEBUG console.log("Checking email fields..");

            // DEBUG console.log("Adding empty validator for ", $(this));
            // DEBUG console.log("Checking email fields..");
            $("#error-custom-email-"+index).remove();
            $(this).removeClass("is-invalid");

            console.log($(this).val() + "  ??  " + email);
            if ($(this).val().indexOf(email) !== -1) {
            
            } else {
                $(this).after("<li class='small text-danger' id='error-custom-email-"+index+"'>This email should be <b>___"+email+"</b></li>")
                $(this).addClass("is-invalid");
            }
        });

        // validate generic emails
        $(".validate-email").each(function (index) {
            var emailPattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

            // DEBUG console.log("Adding empty validator for ", $(this));
            // DEBUG console.log("Checking email fields..");
            $("#error-email-"+index).remove();
            $(this).removeClass("is-invalid");

            if (emailPattern.test($(this).val())) {
                    //
            } else {
                $(this).after("<li class='small text-danger' id='error-email-"+index+"'>Please use a proper email format!</li>")
                $(this).addClass("is-invalid");
                isEmailValid = false;
            }
        });

        if (!isValid || !isEmailValid) {
            if (!isValid) message = message + '<li>Please fill up all required field(s)!</li>';
            if (!isEmailValid) message = message + '<li>Obeserve proper email format!</li>';
            if (!isCurrencyValid) message = message + '<li>Observe proper currency format!</li>';
            message = message + "</ul>";
            $(".validator-message").html(message);
        }
        else $(".validator-message").html('');

        var retVal = isValid && isEmailValid;
        return retVal;
    }

    // clear all items with validator-message class
    clearMessages() {
        $(".validator-message").each(function (index) {
            $(this).html("");
        });
    }

    
}
