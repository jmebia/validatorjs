# validatorjs
A simple client-side HTML form validation handler. *Validator.js* still needs bootstrap for the styling of invalid fields, for now.

### Basic Usage

**IMPORTANT!** Make sure Bootstrap is included in your project before using this. You can get it from https://getbootstrap.com/ 

```html
<!-- include bootstrap CSS files.. -->

<form>
    <input class="required">
</form>

<!-- include bootstrap JS files.. -->
<script src="path/validator.js"></script>
<script>
    // initialize
    var validator = new Validator();
    validator.initRequired();

    // call this to validate fields before your post request
    validator.checkValidations(); // returns true if all required fields are filled
</script>
```

### Features (Version 0.1.0)
- Focusing out of "required" fields will give a warning.
- Validation function for all required fields that can be used before sending your post requests.
- Custom email validation.
