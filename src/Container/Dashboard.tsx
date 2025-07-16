import Logout from "./Logout";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Logout />
      {children}
    </div>
  );
}
