import googlePhoneNumber from "google-libphonenumber";
import { isEmpty } from "lodash";
import moment from "moment";
import * as yup from "yup";

const phoneUtil = googlePhoneNumber.PhoneNumberUtil.getInstance();

yup.setLocale({
  mixed: {
    required: "This field is required",
  },
  string: {
    email: "Invalid Email Address",
  },
  array: {
    min: "This field is required",
  },
});

yup.addMethod(
  yup.string,
  "dateFormat",
  function dateFormat(format = "YYYY-MM-DD", message = "Invalid Date") {
    return this.test({
      name: "dateFormat",
      exclusive: true,
      message,
      test: (value) => isEmpty(value) || moment(value, format, true).isValid(),
    }).nullable();
  }
);

yup.addMethod(
  yup.string,
  "timeFormat",
  function timeFormat(
    message = 'Invalid time, time format should be "HH:MM A/P" (eg. 08:00 A)'
  ) {
    return this.test({
      name: "timeFormat",
      exclusive: true,
      message,
      test: (value) =>
        isEmpty(value) ||
        moment(moment(value).format("hh:mm"), "hh:mm", true).isValid(),
    }).nullable();
  }
);

yup.addMethod(yup.string, "legalAge", function legalAge() {
  return this.test({
    name: "legalAge",
    exclusive: true,
    message: "You must be 15 years old or above",
    test: (value) =>
      isEmpty(value) ||
      moment(value).isBefore(moment(moment()).subtract(15, "years")),
  });
});

yup.addMethod(yup.string, "phone", function phone() {
  return this.test({
    name: "phone",
    exclusive: true,
    message: "Invalid Mobile Number",
    test: (value) =>
      isEmpty(value) ||
      (phoneUtil.isValidNumber(phoneUtil.parse(value, "PH")) &&
        value &&
        /(\+?\d{2}?\s?\d{3}\s?\d{3}\s?\d{4})|([0]\d{3}\s?\d{3}\s?\d{4})/g.test(
          value.replace(/^/, "63")
        )),
  });
});

export default yup;
