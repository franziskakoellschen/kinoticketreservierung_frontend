export function mailNotValid(inputValue) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(inputValue)) {
    return false;
  } else {
    return true;
  }
}

export function houseNumberNotValid(str) {
  var code, i, len;
  if (str === undefined) return true;
  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123) && // lower alpha
      !(code === 32) && // spcae
      !(code === 46)
    ) {
      // .

      return true;
    }
  }
  return false;
}

export function isAlphaNumeric(str) {
  var code, i, len;
  if (str === undefined) return false;
  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123) &&
      !(code === 32) &&
      !(code === 223) &&
      !(code === 228) &&
      !(code === 196) &&
      !(code === 252) &&
      !(code === 220) &&
      !(code === 246) &&
      !(code === 45) &&
      !(code === 214)
    ) {
      // lower alpha (a-z)
      console.log("for " + str + " code" + code);
      return false;
    }
  }
  return true;
}

export function alphanumericInputNotValid(inputValue) {
  if (this.isAlphaNumeric(inputValue) && inputValue.length > 0) return false;
  else return true;
}

export function postCodeNotValid(str) {
  var code, i, len;
  if (str === undefined) return true;
  if (str.length !== 5) return true;
  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && !(code === 32)) {
      return true;
    }
  }
  return false;
}

export function phoneNumberNotValid(str) {
  var code, i, len;
  if (str === undefined) return false; //Die Möglichkeit geben keine Handynummer
  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && //0-9 ) {
      !(code === 32) && // blank
      !(code === 43) && // +
      !(code === 47)
    ) {
      return true;
    }
  }
  return false;
}
