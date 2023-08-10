import { Suspense } from "react";

export function withSuspense(Component) {
  const MeshWithSuspense = (props) => {
    return (
      <Suspense fallback={null}>
        <Component {...props}></Component>
      </Suspense>
    );
  };

  return MeshWithSuspense;
}
