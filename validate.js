const isRequired = (input) =>
  input === '' ? 'This is a required field' : true;

const isUrl = (input) => {
  try {
    const url = new URL(input);
    return url.protocol === 'http:' || url.protocol === 'https:'
      ? true
      : 'Please provide a valid URL';
  } catch (error) {
    return 'Please provide a valid URL';
  }
};

const isEmail = (input) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
    ? true
    : 'Please enter valid email';

module.exports = {
  isRequired,
  isUrl,
  isEmail,
};
