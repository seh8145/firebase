export default function ProtectedRoute({
  children,
} : {
  children:React.ReacNode;
}) {

  const user = auth.currentUser
  return children
} 