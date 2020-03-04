let enableSegwit = false;

module.exports = {
  enableSegwit: enable => {
    if (enable) {
      enableSegwit = true;
    } else {
      enableSegwit = false;
    }
  },
  isSegwit: () => enableSegwit
};
