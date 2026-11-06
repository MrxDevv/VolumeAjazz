module.exports = (plugin) => {
  const action = {
    onKeyDown: ({ context, payload }) => {
      plugin.log.info("Button pressed!");
    },
    onKeyUp: ({ context, payload }) => {
      plugin.log.info("Button released!");
    },
    onWillAppear: ({ context, payload }) => {
    }
  };

  return {
    name: "demo",
    action: action
  };
};