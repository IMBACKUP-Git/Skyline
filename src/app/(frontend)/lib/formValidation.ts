export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_ALLOWED_CHARS_REGEX = /^\+?[0-9\s]+$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const firstName = values.firstName.trim();
  if (!firstName) {
    errors.firstName = "First name is required";
  } else if (firstName.length < 2) {
    errors.firstName = "First name must be at least 2 characters";
  } else if (firstName.length > 50) {
    errors.firstName = "First name must be under 50 characters";
  }

  const lastName = values.lastName.trim();
  if (!lastName) {
    errors.lastName = "Last name is required";
  } else if (lastName.length < 2) {
    errors.lastName = "Last name must be at least 2 characters";
  } else if (lastName.length > 50) {
    errors.lastName = "Last name must be under 50 characters";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Email is required";
  } else if (email.length > 100 || !EMAIL_REGEX.test(email)) {
    errors.email = "Enter a valid email address";
  }

  const mobile = values.mobile.trim();
  const mobileDigitCount = mobile.replace(/[^0-9]/g, "").length;
  if (!mobile) {
    errors.mobile = "Mobile number is required";
  } else if (
    !MOBILE_ALLOWED_CHARS_REGEX.test(mobile) ||
    mobileDigitCount < 7 ||
    mobileDigitCount > 15
  ) {
    errors.mobile = "Enter a valid mobile number (7-15 digits)";
  }

  if (values.message.trim().length > 500) {
    errors.message = "Message must be under 500 characters";
  }

  return errors;
}
