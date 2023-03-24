const palindromes = function (strng) {
    strng = strng.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    return strng === reverseString(strng);
};

function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }

// Do not edit below this line
module.exports = palindromes;
