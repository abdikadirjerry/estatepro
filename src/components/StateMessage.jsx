import { AlertCircle, Inbox, LoaderCircle } from "lucide-react";
import "./StateMessage.css";

const stateConfig = {
  loading: {
    icon: LoaderCircle,
    title: "Loading...",
    description: "Please wait while we prepare your content.",
  },
  empty: {
    icon: Inbox,
    title: "Nothing here yet",
    description: "There is no content to display right now.",
  },
  error: {
    icon: AlertCircle,
    title: "Something went wrong",
    description: "Please try again in a moment.",
  },
};

function StateMessage({ type = "empty", title, description, action }) {
  const config = stateConfig[type] ?? stateConfig.empty;
  const Icon = config.icon;

  return (
    <section
      className={`state-message state-message--${type}`}
      role={type === "error" ? "alert" : "status"}
      aria-live={type === "error" ? "assertive" : "polite"}
    >
      <div className="state-message__icon">
        <Icon
          size={type === "loading" ? 30 : 28}
          className={type === "loading" ? "state-message__spinner" : ""}
          aria-hidden="true"
        />
      </div>

      <h2 className="state-message__title">{title || config.title}</h2>

      <p className="state-message__description">
        {description || config.description}
      </p>

      {action && <div className="state-message__action">{action}</div>}
    </section>
  );
}

export default StateMessage;
