import lifeLegacyMark from "../assets/brand/lifelegacy-mark.svg";
import { workspaces, type WorkspaceName } from "../data/workspaces";

interface AppShellProps {
  activeWorkspace: WorkspaceName;
  eyebrow: string;
  title: string;
  settingsLabel: string;
  sidebarTitle: string;
  sidebarNote: string;
  onWorkspaceChange: (workspace: WorkspaceName) => void;
  children: React.ReactNode;
}

export function AppShell({
  activeWorkspace,
  eyebrow,
  title,
  settingsLabel,
  sidebarTitle,
  sidebarNote,
  onWorkspaceChange,
  children,
}: AppShellProps) {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-lockup">
          <img
            className="brand-mark"
            src={lifeLegacyMark}
            alt="LifeLegacy Studio Suite mark"
          />
          <div>
            <p className="brand-kicker">LifeLegacy</p>
            <h1>Studio Suite</h1>
          </div>
        </div>

        <nav className="module-nav" aria-label="LifeLegacy workspaces">
          {workspaces.map((workspace) => (
            <button
              className={
                workspace === activeWorkspace
                  ? "module-button active"
                  : "module-button"
              }
              key={workspace}
              onClick={() => onWorkspaceChange(workspace)}
              type="button"
            >
              {workspace}
            </button>
          ))}
        </nav>

        <div className="sidebar-note">
          <p>{sidebarTitle}</p>
          <span>{sidebarNote}</span>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
          <button className="ghost-button" type="button">
            {settingsLabel}
          </button>
        </header>

        {children}
      </section>
    </main>
  );
}
