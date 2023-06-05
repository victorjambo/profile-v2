export function checkIfMobile() {
  let isMobile = false;

  const userAgent =
    typeof window !== "undefined" ? window.navigator.userAgent : "";

  isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return isMobile;
}
