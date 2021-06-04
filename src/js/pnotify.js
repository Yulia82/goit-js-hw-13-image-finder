import { info, error, defaults } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import "@pnotify/core/dist/PNotify.css";
import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/confirm/dist/PNotifyConfirm.css";

function inform(text) {
    info({
        text: `${text}`,
    });
};
 
function errorInfo(text) {
  error({
        title: "Error:",
        text: `${text}`,
    });  
};

export default {inform, errorInfo};
// export default errorInfo;

// defaultModules.set(PNotifyCore, {});

// import { info, notice, error, defaults } from "@pnotify/core";
// import '@pnotify/core/dist/Material.css';
// import "@pnotify/core/dist/PNotify.css";
// import "@pnotify/core/dist/BrightTheme.css";
// import "@pnotify/confirm/dist/PNotifyConfirm.css";