const { Actions } = require("../utils/plugin");

module.exports = (plugin) => {
  const activeInstances = new Map();

  return {
    // Must match the UUID inside manifest.json exactly
    name: "com.mrxdev.volumeajazz.demo",

    action: new Actions({
      async _willAppear({ context, payload }) {
        // Example: activeInstances.set(context, { state: 0 });
      },

      _willDisappear({ context }) {
        // Example: activeInstances.delete(context);
      },

      keyUp({ context, payload }) {
        plugin.setTitle(context, "Clicked! yay");
      },

      keyDown({ context, payload }) {},

      _propertyInspectorDidAppear({ context }) {},

      sendToPlugin({ context, payload }) {},

      dialRotate({ context, payload: { ticks } }) {},

      dialDown({ context, payload }) {},
    }),
  };
};