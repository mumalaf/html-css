async function startGrilling() {
  try {
    const grillMeat = await fetch('grill.js');
  } catch (err) {
    console.error(err);
  }
}
