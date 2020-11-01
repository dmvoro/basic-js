const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != "string") {
    return false;
  }

  let sample = parseFloat(sampleActivity);

  if (!sample || sample < 1 || sample > MODERN_ACTIVITY){
    return false;
  }

  const k = HALF_LIFE_PERIOD/0.693;

  return Math.ceil(Math.log(MODERN_ACTIVITY/sample)*k);
};
