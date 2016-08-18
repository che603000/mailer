/**
 * Created by alex on 18.08.2016.
 */


import $ from "jquery";
const validator = require("validator-js");


export  default  class Form {
    constructor($form, options = {}) {
        this.options = options;
        this.$form = $($form).on('submit', this.onSubmit.bind(this));
    }

    onSubmit(e) {
        e.preventDefault();
        const propsArray = $(this.$form).serializeArray(),
            props1 = propsArray.reduce((res, item)=> {
                res[item.name] = item.value;
                return res;
            }, {}),
            props ={
                name: 'alex90',
                url: 'http://localhost:8080/?name=&url='
            }

        if (this.validate(props)) {
            $.post('/api/v1/register', props)
                .done(res=> {
                    console.log(res);
                })
        } else {
            alert('Error form !!!')
        }

        return false;
    }

    validate(attr) {
        return validator.isURL(attr.url) && validator.isLength(attr.name, {min: 5});
    }

}