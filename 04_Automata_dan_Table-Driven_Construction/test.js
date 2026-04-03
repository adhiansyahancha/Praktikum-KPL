const assert = require("assert");

function testAssignment(no, input, expected, errorMsg) {
  try {
    assert.strictEqual(input, expected);
    return `✅ Tes ${no} berhasil`;
  } catch (error) {
    return `❌ Tes ${no} gagal: ${expected} adalah yang diharapkan, bukan ${input}`;
  }
}

const divElement = document.getElementById("mode-div");

console.log(
  testAssignment(1, (typeof divElement), "object")
);