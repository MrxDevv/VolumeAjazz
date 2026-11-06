const fs = require("fs");
const path = require("path");
const { Plugins, log } = require("./utils/plugin");

const plugin = new Plugins("volumeajazz");

plugin.didReceiveGlobalSettings = ({ payload: { settings } }) => {
  log.info("Global settings received:", settings);
};

const loadActions = () => {
  const actionsDir = path.join(__dirname, "Actions");

  if (!fs.existsSync(actionsDir)) return;

  const files = fs.readdirSync(actionsDir).filter((file) => file.endsWith(".js"));

  for (const file of files) {
    try {
      const setupAction = require(path.join(actionsDir, file));
      const { name, action } = setupAction(plugin);

      plugin[name] = action;
      log.info(`✅ Loaded action: ${name}`);
    } catch (error) {
      log.error(`❌ Failed to load action from ${file}:`, error.message);
    }
  }
};

loadActions();